goog.provide('brundij.shared.render');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var shadow$empty=shadow.js.require("shadow$empty", {});
brundij.shared.render.add_component_string_to_html = (function brundij$shared$render$add_component_string_to_html(html,component_string){
return clojure.string.replace(html,"${{html-string}}",component_string);
});
brundij.shared.render.add_scripts_to_include_to_html = (function brundij$shared$render$add_scripts_to_include_to_html(html,scripts_to_include){
return clojure.string.replace(html,"${{scripts-to-include}}",scripts_to_include);
});
brundij.shared.render.add_hydrate_script_fn_to_html = (function brundij$shared$render$add_hydrate_script_fn_to_html(html,hydrate_script_fn){
return clojure.string.replace(html,"${{hydrate-script}}",hydrate_script_fn);
});
brundij.shared.render.add_title_to_html = (function brundij$shared$render$add_title_to_html(html,title){
return clojure.string.replace(html,"${{title}}",title);
});
brundij.shared.render.add_stylesheets_to_html = (function brundij$shared$render$add_stylesheets_to_html(html,stylesheets){
return clojure.string.replace(html,"${{stylesheets}}",stylesheets);
});
brundij.shared.render.html_template = (function brundij$shared$render$html_template(pre_rendered_html,hydrate_script_fn,scripts_to_include,title,stylesheets){
return brundij.shared.render.add_stylesheets_to_html(brundij.shared.render.add_title_to_html(brundij.shared.render.add_scripts_to_include_to_html(brundij.shared.render.add_hydrate_script_fn_to_html(brundij.shared.render.add_component_string_to_html("<html>\n      <head>\n        <meta charset=\"utf-8\">\n        <style>\n          body {\n            margin: 0;\n            outline: 0;\n            padding: 0;\n            -webkit-font-smoothing: antialiased;\n            -moz-osx-font-smoothing: grayscale;\n            font-family: 'Poppins', sans-serif;\n          }\n        </style>\n        <link rel=\"stylesheet\" href=\"/assets/css/brundij/shared/shared.css\">\n        <link rel=\"shortcut icon\" href=\"/assets/favicon.ico\"/>\n        <link rel=\"icon\" href=\"/assets/favicon.ico\" />\n        ${{stylesheets}}\n        ${{scripts-to-include}}\n        <title>${{title}}</title>\n      </head>\n      <body>\n        <div id=\"root\">${{html-string}}</div>\n      </body>\n      <script>${{hydrate-script}}</script>\n    </html>",pre_rendered_html),hydrate_script_fn),scripts_to_include),title),stylesheets);
});
brundij.shared.render.pre_render = (function brundij$shared$render$pre_render(pre_rendered_html,hydrate_script_fn,view_name,scripts_to_include,title,stylesheets){
return shadow$empty.writeFileSync(["public/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_name),".html"].join(''),brundij.shared.render.html_template(pre_rendered_html,hydrate_script_fn,scripts_to_include,title,stylesheets));
});
brundij.shared.render.hydrate_no_event = (function brundij$shared$render$hydrate_no_event(component){
var cb = document.getElementById("root");
return module$node_modules$react_dom$index.hydrate(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null)),cb);
});
goog.exportSymbol('brundij.shared.render.hydrate_no_event', brundij.shared.render.hydrate_no_event);
brundij.shared.render.hydrate = (function brundij$shared$render$hydrate(component,event){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));

var cb = document.getElementById("root");
return module$node_modules$react_dom$index.hydrate(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null)),cb);
});
goog.exportSymbol('brundij.shared.render.hydrate', brundij.shared.render.hydrate);

//# sourceMappingURL=brundij.shared.render.js.map
