// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 🍎, 홀수라면 🍊을 출력하도록
// if
if (num % 2 === 0) {
  console.log("👍");
} else if (num % 2 === 1) {
  // else 사용할수 있다.
  console.log("👎");
}
// ternary
num % 2 === 0 ? console.log("👍") : console.log("👎");
// ternary 2
let emoji = num % 2 === 0 ? "👍" : "👎";
console.log(emoji); // 코드가 간결하고 반복성이 줄어든다
