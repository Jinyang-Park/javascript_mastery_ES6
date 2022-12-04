// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function (a, b) {
  // 함수도 객체이기 때문에 재할당이 가능하고 변수 선언도 가능하다
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => a + b;

console.log(add(2, 4));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immedicately-Invoked Function Expressions) // 바로 호출하고 싶을 때 사용한다
(function run() {
  console.log("@");
})();
