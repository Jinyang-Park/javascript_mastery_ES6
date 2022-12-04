// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter  클래스 만들기

// 1. 사용자 입장에서 생각해보기
// 2. 유니테스트 작성한다

class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  get value() {
    return this.#value;
  }
  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.value);

// 나의 풀이
// class Counter {
//   constructor(increase) {
//     this.increase = increase;
//   }
//   display = () => {
//     for (let i = 0; i < this.increase.length; i++) {
//       console.log(`${i}`);
//     }
//   };
// }

// const add = new Counter("");

// console.log(add);

// 🌟 다른 사람 풀이 신박한 방법 🌟
// class Counter {
//   #count = 0;

//   constructor(name) {
//     console.log(`${name} 업장의 영업을 시작합니다.`);
//   }

//   printTotalCount() {
//     return console.log("현재까지 방문자 : ", this.#count);
//   }

//   countUp() {
//     this.#count++;
//     this.printTotalCount();
//   }

//   countDown() {
//     this.#count--;
//     this.printTotalCount();
//   }

//   countUpManyPerson(value) {
//     this.#count = this.#count + value;
//     this.printTotalCount();
//   }

//   get totalCount() {
//     return `오늘 총 방문자 수 : ${this.#count}`;
//   }
// }

// const restaurant = new Counter("엘리네 식당");

// restaurant.countUp();
// restaurant.countUp();
// restaurant.countDown();
// restaurant.countUpManyPerson(4);
// restaurant.countUpManyPerson(2);

// console.log(restaurant.totalCount);
