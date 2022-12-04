// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
const array = ["🍌", "🍓", "🍇", "🍓"];

function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}
const result = replace(array, "🍓", "🥝");
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// 선생님 방식
function count2(arr, item) {
  return arr.filter((value) => value === item).length;
  // return arr.reduce((count, value) => {
  //   if (value === item) {
  //     count++;
  //   }
  //   return count;
  // }, 0);
}
console.log(count2(["🍌", "🥝", "🍇", "🥝"], "🥝"));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// 선생님 방식
function match(input, search) {
  return input.filter((item) => search.includes(item));
}

console.log(match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]));
// 내 방식
const arr = ["🍌", "🥝", "🍇"];
const arr2 = ["🍌", "🍓", "🍇", "🍓"];

const arr3 = arr.filter((value) => arr2.includes(value));
console.log(arr3);

// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];

const result2 = nums //
  .filter((num) => num > 5) // [16, 25, 34, 21]
  .reduce((avg, num, _, array) => avg + num / array.length, 0); //
// reduce의 방법 풀이
// 16/4 , 25/4, 34/4, 21/4 로 해서 더한 다음 평균 값을 내는 방법이다
// 인자로 index와 array를 받아와서 array.length 만큼 나눠준디
// 여기서 index는 사용하지 않기 때문에 _ 로 표기해둔다
console.log(result2);
