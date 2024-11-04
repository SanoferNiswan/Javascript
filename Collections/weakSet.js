let weakSet = new WeakSet();
let obj = { name: "test" };
weakSet.add(obj);
// If `obj` is deleted or goes out of scope, it will be removed from `weakSet`.
