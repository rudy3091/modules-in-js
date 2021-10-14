// amd 모듈을 이용한 calculator 모듈 export
//
// add, sub, mul의 메소드를 가진 객체를 calculator 라는
// 이름으로 export함
//
define('calculator', {
  add: function(x, y) {
    return x + y;
  },
  sub: function(x, y) {
    return x - y;
  },
  mul: function(x, y) {
    return x * y;
  }
})
