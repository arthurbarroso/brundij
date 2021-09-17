
shadow.cljs.devtools.client.env.module_loaded('app');

try { brundij.core.init(); } catch (e) { console.error("An error occurred when calling (brundij.core/init)"); throw(e); }