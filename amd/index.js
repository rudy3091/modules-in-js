// amd 모듈을 이용한 calculator 모듈 로드
//
// index.html 에서 script 태그를 이용해 calculator.js 과 utils.js
// 보다 index.js를 먼저 불러왔지만 정상적으로 동작함
//
require(['calculator', 'functionals'], function(calculator, F) {
  console.log(calculator.add(4, 5)); // 9
  document.write(calculator.add(3, 2)); // 5

  const res1 = F.pipe(
    F.repeat,
    F.take(4),
  ) (5);
  console.log(res1); // [5, 5, 5, 5]

  const res2 = F.pipe(
    F.range,
    F.take(10),
  ) ({ from: 12, to: 16 });
  console.log(res2); // [12, 13, 14, 15]

  const res3 = F.pipe(
    F.range,
    F.take(3),
  ) ({ from: 2, to: 18, step: 3 });
  console.log(res3); // [2, 5, 8]
})
