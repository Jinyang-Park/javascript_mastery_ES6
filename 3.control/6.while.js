// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false; // 조건에 맞으때만 실행하고 싶을때만 while
let i = 0;
while (isActive) {
  console.log("아직살아있다!");
  if (i === 10) {
    break;
  }
  i++;
}

do {
  // 무조건 꼭 한번은 실행하고 싶을떄 do while을 사용한다
  console.log("do-while 아직살아있다");
} while (isActive);
