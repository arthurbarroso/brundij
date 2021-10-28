goog.provide("goog.module.ModuleLoader");
goog.require("goog.Timer");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.events");
goog.require("goog.events.Event");
goog.require("goog.events.EventHandler");
goog.require("goog.events.EventId");
goog.require("goog.events.EventTarget");
goog.require("goog.functions");
goog.require("goog.html.TrustedResourceUrl");
goog.require("goog.labs.userAgent.browser");
goog.require("goog.log");
goog.require("goog.module.AbstractModuleLoader");
goog.require("goog.net.BulkLoader");
goog.require("goog.net.EventType");
goog.require("goog.net.jsloader");
goog.require("goog.userAgent");
goog.require("goog.userAgent.product");
goog.requireType("goog.module.ModuleInfo");
goog.module.ModuleLoader = function() {
  goog.module.ModuleLoader.base(this, "constructor");
  this.eventHandler_ = new goog.events.EventHandler(this);
  this.registerDisposable(this.eventHandler_);
  this.loadingModulesStatus_ = {};
};
goog.inherits(goog.module.ModuleLoader, goog.events.EventTarget);
goog.module.ModuleLoader.prototype.logger = goog.log.getLogger("goog.module.ModuleLoader");
goog.module.ModuleLoader.prototype.debugMode_ = false;
goog.module.ModuleLoader.prototype.sourceUrlInjection_ = false;
goog.module.ModuleLoader.prototype.useScriptTags_ = false;
goog.module.ModuleLoader.supportsSourceUrlStackTraces = function() {
  return goog.userAgent.product.CHROME || goog.labs.userAgent.browser.isFirefox() && goog.labs.userAgent.browser.isVersionOrHigher("36");
};
goog.module.ModuleLoader.supportsSourceUrlDebugger = function() {
  return goog.userAgent.product.CHROME || goog.userAgent.GECKO;
};
goog.module.ModuleLoader.URL_MAX_LENGTH_ = 4043;
goog.module.ModuleLoader.SYNTAX_OR_NETWORK_ERROR_CODE_ = -1;
goog.module.ModuleLoader.createScriptElement_ = function(url) {
  const script = goog.dom.createElement(goog.dom.TagName.SCRIPT);
  goog.dom.safe.setScriptSrc(script, url);
  script.async = false;
  return script;
};
goog.module.ModuleLoader.createPreloadScriptElement_ = function(url) {
  const link = goog.dom.createElement(goog.dom.TagName.LINK);
  goog.dom.safe.setLinkHrefAndRel(link, url, "preload");
  link.as = "script";
  var nonce = goog.getScriptNonce();
  if (nonce) {
    link.setAttribute("nonce", nonce);
  }
  return link;
};
goog.module.ModuleLoader.prototype.getDebugMode = function() {
  return this.debugMode_;
};
goog.module.ModuleLoader.prototype.setUseScriptTags = function(useScriptTags) {
  this.useScriptTags_ = useScriptTags;
};
goog.module.ModuleLoader.prototype.getUseScriptTags = function() {
  return this.useScriptTags_;
};
goog.module.ModuleLoader.prototype.setDebugMode = function(debugMode) {
  this.debugMode_ = debugMode;
};
goog.module.ModuleLoader.prototype.setSourceUrlInjection = function(enabled) {
  this.sourceUrlInjection_ = enabled;
};
goog.module.ModuleLoader.prototype.usingSourceUrlInjection_ = function() {
  return this.sourceUrlInjection_ || this.getDebugMode() && goog.module.ModuleLoader.supportsSourceUrlStackTraces();
};
goog.module.ModuleLoader.prototype.loadModules = function(ids, moduleInfoMap, {forceReload, onError, onSuccess, onTimeout} = {}) {
  var loadStatus = this.loadingModulesStatus_[ids] || goog.module.ModuleLoader.LoadStatus.createForIds_(ids, moduleInfoMap);
  loadStatus.loadRequested = true;
  if (loadStatus.successFn && onSuccess) {
    loadStatus.successFn = goog.functions.sequence(loadStatus.successFn, onSuccess);
  } else {
    loadStatus.successFn = onSuccess || loadStatus.successFn;
  }
  loadStatus.errorFn = onError || null;
  if (!this.loadingModulesStatus_[ids]) {
    this.loadingModulesStatus_[ids] = loadStatus;
    this.downloadModules_(ids);
  } else {
    if (this.getUseScriptTags()) {
      this.downloadModules_(ids);
    } else {
      if (loadStatus.responseTexts != null) {
        this.evaluateCode_(ids);
      }
    }
  }
};
goog.module.ModuleLoader.prototype.evaluateCode_ = function(moduleIds) {
  this.dispatchEvent(new goog.module.ModuleLoader.RequestSuccessEvent(moduleIds));
  goog.log.info(this.logger, "evaluateCode ids:" + moduleIds);
  var loadStatus = this.loadingModulesStatus_[moduleIds];
  var uris = loadStatus.requestUris;
  var texts = loadStatus.responseTexts;
  var error = null;
  try {
    if (this.usingSourceUrlInjection_()) {
      for (var i = 0; i < uris.length; i++) {
        var uri = uris[i];
        goog.globalEval(texts[i] + " //# sourceURL\x3d" + uri);
      }
    } else {
      goog.globalEval(texts.join("\n"));
    }
  } catch (e) {
    error = e;
    goog.log.warning(this.logger, "Loaded incomplete code for module(s): " + moduleIds, e);
  }
  this.dispatchEvent(new goog.module.ModuleLoader.EvaluateCodeEvent(moduleIds));
  if (error) {
    this.handleErrorHelper_(moduleIds, loadStatus.errorFn, null, error);
  } else {
    if (loadStatus.successFn) {
      loadStatus.successFn();
    }
  }
  delete this.loadingModulesStatus_[moduleIds];
};
goog.module.ModuleLoader.prototype.handleSuccess_ = function(bulkLoader, moduleIds) {
  goog.log.info(this.logger, "Code loaded for module(s): " + moduleIds);
  var loadStatus = this.loadingModulesStatus_[moduleIds];
  loadStatus.responseTexts = bulkLoader.getResponseTexts();
  if (loadStatus.loadRequested) {
    this.evaluateCode_(moduleIds);
  }
  goog.Timer.callOnce(bulkLoader.dispose, 5, bulkLoader);
};
goog.module.ModuleLoader.prototype.prefetchModule = function(id, moduleInfo) {
  if (this.getDebugMode()) {
    return;
  }
  goog.log.info(this.logger, `Prefetching module: ${id}`);
  var loadStatus = this.loadingModulesStatus_[[id]];
  if (loadStatus) {
    return;
  }
  var moduleInfoMap = {};
  moduleInfoMap[id] = moduleInfo;
  loadStatus = goog.module.ModuleLoader.LoadStatus.createForIds_([id], moduleInfoMap);
  this.loadingModulesStatus_[[id]] = loadStatus;
  if (this.getUseScriptTags()) {
    const links = [];
    const insertPos = document.head || document.documentElement;
    for (var i = 0; i < loadStatus.trustedRequestUris.length; i++) {
      const link = goog.module.ModuleLoader.createPreloadScriptElement_(loadStatus.trustedRequestUris[i]);
      links.push(link);
      insertPos.insertBefore(link, insertPos.firstChild);
    }
    loadStatus.successFn = () => {
      for (var i = 0; i < links.length; i++) {
        const link = links[i];
        goog.dom.removeNode(link);
      }
    };
  } else {
    this.downloadModules_([id]);
  }
};
goog.module.ModuleLoader.prototype.downloadModules_ = function(ids) {
  const debugMode = this.getDebugMode();
  const sourceUrlInjection = this.usingSourceUrlInjection_();
  const useScriptTags = this.getUseScriptTags();
  if (debugMode + sourceUrlInjection + useScriptTags > 1) {
    const effectiveFlag = useScriptTags ? "useScriptTags" : debugMode && !sourceUrlInjection ? "debug" : "sourceUrlInjection";
    goog.log.warning(this.logger, `More than one of debugMode (set to ${debugMode}), ` + `useScriptTags (set to ${useScriptTags}), ` + `and sourceUrlInjection (set to ${sourceUrlInjection}) ` + `is enabled. Proceeding with download as if ` + `${effectiveFlag} is set to true and the rest to false.`);
  }
  const loadStatus = goog.asserts.assert(this.loadingModulesStatus_[ids]);
  if (useScriptTags) {
    this.loadWithNonAsyncScriptTag_(loadStatus, ids);
  } else {
    if (debugMode && !sourceUrlInjection) {
      goog.net.jsloader.safeLoadMany(loadStatus.trustedRequestUris);
    } else {
      goog.log.info(this.logger, "downloadModules ids:" + ids + " uris:" + loadStatus.requestUris);
      var bulkLoader = new goog.net.BulkLoader(loadStatus.requestUris);
      var eventHandler = this.eventHandler_;
      eventHandler.listen(bulkLoader, goog.net.EventType.SUCCESS, goog.bind(this.handleSuccess_, this, bulkLoader, ids));
      eventHandler.listen(bulkLoader, goog.net.EventType.ERROR, goog.bind(this.handleError_, this, bulkLoader, ids));
      bulkLoader.load();
    }
  }
};
goog.module.ModuleLoader.prototype.loadWithNonAsyncScriptTag_ = function(loadStatus, ids) {
  goog.log.info(this.logger, `Loading initiated for: ${ids}`);
  if (loadStatus.trustedRequestUris.length == 0) {
    if (loadStatus.successFn) {
      loadStatus.successFn();
      return;
    }
  }
  let lastScript = null;
  const insertPos = document.head || document.documentElement;
  for (var i = 0; i < loadStatus.trustedRequestUris.length; i++) {
    const url = loadStatus.trustedRequestUris[i];
    const urlLength = loadStatus.requestUris[i].length;
    goog.asserts.assert(urlLength <= goog.module.ModuleLoader.URL_MAX_LENGTH_, `Module url length is ${urlLength}, which is greater than limit of ` + `${goog.module.ModuleLoader.URL_MAX_LENGTH_}. This should never ` + `happen.`);
    const scriptElement = goog.module.ModuleLoader.createScriptElement_(url);
    scriptElement.onload = () => {
      scriptElement.onload = null;
      scriptElement.onerror = null;
      goog.dom.removeNode(scriptElement);
      if (scriptElement == lastScript) {
        goog.log.info(this.logger, `Loading complete for: ${ids}`);
        lastScript = null;
        if (loadStatus.successFn) {
          loadStatus.successFn();
        }
      }
    };
    scriptElement.onerror = () => {
      goog.log.error(this.logger, `Network error when loading module(s): ${ids}`);
      scriptElement.onload = null;
      scriptElement.onerror = null;
      goog.dom.removeNode(scriptElement);
      this.handleErrorHelper_(ids, loadStatus.errorFn, goog.module.ModuleLoader.SYNTAX_OR_NETWORK_ERROR_CODE_);
      if (lastScript == scriptElement) {
        lastScript = null;
      } else {
        goog.log.error(this.logger, `Dependent requests were made in parallel with failed request ` + `for module(s) "${ids}". Non-recoverable out-of-order ` + `execution may occur.`);
      }
    };
    lastScript = scriptElement;
    insertPos.insertBefore(scriptElement, insertPos.firstChild);
  }
};
goog.module.ModuleLoader.prototype.handleError_ = function(bulkLoader, moduleIds, event) {
  var loadStatus = this.loadingModulesStatus_[moduleIds];
  if (loadStatus) {
    delete this.loadingModulesStatus_[moduleIds];
    this.handleErrorHelper_(moduleIds, loadStatus.errorFn, event.status);
  }
  goog.Timer.callOnce(bulkLoader.dispose, 5, bulkLoader);
};
goog.module.ModuleLoader.prototype.handleErrorHelper_ = function(moduleIds, errorFn, status, opt_error) {
  this.dispatchEvent(new goog.module.ModuleLoader.RequestErrorEvent(moduleIds, status, opt_error));
  goog.log.warning(this.logger, "Request failed for module(s): " + moduleIds);
  if (errorFn) {
    errorFn(status);
  }
};
goog.module.ModuleLoader.EventType = {EVALUATE_CODE:new goog.events.EventId(goog.events.getUniqueId("evaluateCode")), REQUEST_SUCCESS:new goog.events.EventId(goog.events.getUniqueId("requestSuccess")), REQUEST_ERROR:new goog.events.EventId(goog.events.getUniqueId("requestError"))};
goog.module.ModuleLoader.EvaluateCodeEvent = function(moduleIds) {
  goog.module.ModuleLoader.EvaluateCodeEvent.base(this, "constructor", goog.module.ModuleLoader.EventType.EVALUATE_CODE);
  this.moduleIds = moduleIds;
};
goog.inherits(goog.module.ModuleLoader.EvaluateCodeEvent, goog.events.Event);
goog.module.ModuleLoader.RequestSuccessEvent = function(moduleIds) {
  goog.module.ModuleLoader.RequestSuccessEvent.base(this, "constructor", goog.module.ModuleLoader.EventType.REQUEST_SUCCESS);
  this.moduleIds = moduleIds;
};
goog.inherits(goog.module.ModuleLoader.RequestSuccessEvent, goog.events.Event);
goog.module.ModuleLoader.RequestErrorEvent = function(moduleIds, status, opt_error) {
  goog.module.ModuleLoader.RequestErrorEvent.base(this, "constructor", goog.module.ModuleLoader.EventType.REQUEST_ERROR);
  this.moduleIds = moduleIds;
  this.status = status;
  this.error = opt_error || null;
};
goog.inherits(goog.module.ModuleLoader.RequestErrorEvent, goog.events.Event);
goog.module.ModuleLoader.LoadStatus = function(trustedRequestUris) {
  this.requestUris = goog.array.map(trustedRequestUris, goog.html.TrustedResourceUrl.unwrap);
  this.trustedRequestUris = trustedRequestUris;
  this.responseTexts = null;
  this.loadRequested = false;
  this.successFn = null;
  this.errorFn = null;
};
goog.module.ModuleLoader.LoadStatus.createForIds_ = function(ids, moduleInfoMap) {
  if (!ids) {
    return new goog.module.ModuleLoader.LoadStatus([]);
  }
  const trustedRequestUris = [];
  for (var i = 0; i < ids.length; i++) {
    goog.array.extend(trustedRequestUris, moduleInfoMap[ids[i]].getUris());
  }
  return new goog.module.ModuleLoader.LoadStatus(trustedRequestUris);
};

//# sourceMappingURL=goog.module.moduleloader.js.map
