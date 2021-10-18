(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define("index", factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("index"));
  } else {
    root.index = factory(root.calculator);
  }
})(typeof self !== "undefined" ? self : this, function (calculator) {
  console.log(calculator.add(3, 4)); // 7
  return {};
});

