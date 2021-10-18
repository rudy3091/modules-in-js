(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["calculator"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("calculator"));
  } else {
    root.calculator = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  return {
    add: function (x, y) {
      return x + y;
    },
    sub: function (x, y) {
      return x - y;
    },
    mul: function (x, y) {
      return x * y;
    },
  };
});
