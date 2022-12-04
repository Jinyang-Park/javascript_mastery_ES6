// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
const array = ["🍌", "🍓", "🍇", "🍓"];
const result = replace(array, "🍓", "🥝");
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// 선생님 방식
function count2(arr, item) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      counter++;
    }
  }
  return counter;
}
console.log(count2(["🍌", "🥝", "🍇", "🥝"], "🥝"));

// 내 방식
function find(array2) {
  const found = Array.from(array2);
  for (let i = 0; i < found.length; i++) {
    if (found[i] === "🥝") {
      count++;
    }
  }
  return count;
}
const array2 = ["🍌", "🥝", "🍇", "🥝"];
let count = 0;
const result2 = find(array2);
console.log(count);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// 선생님 방식
function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
console.log(match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]));

// 내 방식
const arr = ["🍌", "🥝", "🍇"];
const arr2 = ["🍌", "🍓", "🍇", "🍓"];

const arr3 = arr.filter((it) => arr2.includes(it));
console.log(arr3);
