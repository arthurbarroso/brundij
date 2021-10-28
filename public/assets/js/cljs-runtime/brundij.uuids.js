goog.provide('brundij.uuids');
brundij.uuids.generate_uuid = (function brundij$uuids$generate_uuid(){
return cljs.core.random_uuid();
});
brundij.uuids.uuid_from_string = (function brundij$uuids$uuid_from_string(s){
return cljs.core.uuid(s);
});

//# sourceMappingURL=brundij.uuids.js.map
