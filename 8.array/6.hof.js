const fruits = ["π", "π", "π", "π"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// λ°°μ΄μ λΉκΈ λΉκΈ λλ©΄μ μνλκ²(μ½λ°±ν¨μ)μ ν λ
fruits.forEach(function (value) {
  console.log(value);
});

fruits.forEach((value) => console.log(value));

// μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμλ
// find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
const item1 = { name: "π₯", price: 2 };
const item2 = { name: "πͺ", price: 3 };
const item3 = { name: "π§", price: 1 };

const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === "πͺ");
console.log(result);

// findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν
result = products.findIndex((value) => value.name === "πͺ");
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.some((item) => item.name === "πͺ");
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.every((value) => value.name === "πͺ");
console.log(result);

// μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘!
result = products.filter((value) => value.name === "πͺ");
console.log(result);

console.clear();

// Map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap: μ€μ²©λ λ°°μ΄μ μ«μ ν΄μ€
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ["dream", "coding"].map((text) => text.split(""));
console.log(result);

result = ["dream", "coding"].flatMap((text) => text.split(""));
console.log(result);

// sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬
// λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
const texts = ["hi", "abc"];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);
// < 0 aκ° μμΌλ‘ μ λ ¬, μ€λ¦μ°¨μ
// > 0 bκ° μμΌλ‘ μ λ ¬, λ΄λ¦Όμ°¨μ
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce λ°°μ΄μ μμλ€μ μ μ΄μ κ°μ νλλ‘!
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  // κ°μ΄ λν΄μ§λ λμ μλ¦¬ μ€λͺ
  // sum = 0μ΄ λκ³  value 1 κ°μ΄ μ€κ³  λμ΄ λνλ©΄ 1μ΄λ€.
  // sum = 1μ΄ λκ³  value 2 κ°μ΄ μ€κ³  λμ΄ λνλ©΄ 3μ΄λ€.
  // sum = 3μ΄ λκ³  value 3 κ°μ΄ μ€κ³  λμ΄ λνλ©΄ 6μ΄λ€.
  // sum = 6μ΄ λκ³  value 4 κ°μ΄ μ€κ³  λμ΄ λνλ©΄ 10μ΄λ€.
  // sum = 10μ΄ λκ³  value 5 κ°μ΄ μ€κ³  λμ΄ λνλ©΄ 15μ΄λ€.
  return sum;
}, 0); // λλ²μ§Έ μΈμμΈ 0μΌλ‘ μ΄κΈ°ν νλ€
console.log(result); // μ΄ 15κ°μ΄ λμ¨λ€

// κ°λ΅ν λ²μ 
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);
