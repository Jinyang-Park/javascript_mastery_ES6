// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max,action) 순회 = interate

// 틀린 나의 문제 풀이 동작하지 않음! 난 꼭 이런다 해결 안되면 그냥 답보는 버릇 진짜 안좋은것같다
const multiply = (i) => i * 2;

function iterate(max, action) {
  for (let i = 0; i <= 5; i++) {
    return i;
  }
  let result = action(max);
  console.log(result);
  return result;
}

// 선생님 풀이
function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i); // 내가 변경하고 싶은 부분만 콜백함수로 만들수 있다.
  }
}

// 1. 내 생각은 iterate(3, log); -> 3의 매개변수는 max로 전달되고 log는 action으로 전달되서 그런것같다
// 2. action이 i를 전달하니깐 0,1,2이 num에 옴
// 3. 또한, iterate(3, log); -> 여기서 함수 log 변수의 인자인 num을 가르키는 말이다.
function log(num) {
  console.log(num);
}

function doubleAndLog(num) {
  console.log(num * 2);
}
iterate(3, log);
iterate(3, doubleAndLog);

// 화살표 함수를 사용하여 한줄로 간단하게 표현할수 있다
iterate(3, (num) => console.log(num));
iterate(3, (num) => console.log(num * 2));

setTimeout(() => {
  console.log("짜잔!");
}, 3000);
// 타임이 끝났을때 함수를 호출한다
