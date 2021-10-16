define("functionals", {
  pipe:
    (...fns) =>
    (arg) =>
      fns.reduce((acc, f) => f(acc), arg),
  repeat: function* (x) {
    while (true) {
      yield x;
    }
  },
  range: function* ({ from, to, step }) {
    step = step ?? 1;
    for (let x = from; x < to; x += step) {
      yield x;
    }
  },
  take: (n) => (src) => {
    const ret = [];
    for (let i = 0; i < n; i++) {
      const next = src.next();
      !next.done && ret.push(next.value);
    }
    return ret;
  },
});
