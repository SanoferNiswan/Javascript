let weakMap = new WeakMap();
let element = document.querySelector("#element");
weakMap.set(element, "some data");
// If `element` is removed from the DOM, it will also be removed from `weakMap`.
