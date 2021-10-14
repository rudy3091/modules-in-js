// amd 모듈을 이용한 calculator 모듈 로드
//
// index.html 에서 script 태그를 이용해 calculator.js 보다
// index.js를 먼저 불러왔지만 정상적으로 동작함
//
require(['calculator'], function(calculator) {
  console.log(calculator.add(4, 5)); // 9
  document.write(calculator.add(3, 2)); // 5
})

// amd 모듈을 사용하지 않고 아래처럼 사용할 경우 에러 발생
//
// console.log(calculator.sub(4, 2));
