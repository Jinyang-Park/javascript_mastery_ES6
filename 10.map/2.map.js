const map = new Map([
  ["key1", "๐"],
  ["key2", "๐"],
]);
console.log(map);

// ์ฌ์ด์ฆ ํ์ธ
console.log(map.size);

// ์กด์ฌํ๋์ง ํ์ธ
console.log(map.has("key1"));
console.log(map.has("key6"));

// ์ํ
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// ์ฐพ๊ธฐ
console.log(map.get("key1"));
console.log(map.get("key2"));
console.log(map.get("key6"));

// ์ถ๊ฐ
map.set("key3", "๐ฅ");
console.log(map);

// ์ญ์ 
map.delete("key3");
console.log(map);

// ์ ๋ถ์ญ์ 
map.clear();
console.log(map);

// ์ค๋ธ์ ํธ์์ ํฐ ์ฐจ์ด์ ??
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "๋ง์๋ ์ฐ์ " };

const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]); // undefined๊ฐ ๋ฌ๋ค
console.log(map2.get(key)); // object์ map์ key, value๋ก ์ฌ์ฉํ์ฌ ๋น์ทํ๊ฒ ์ฌ์ฉํ์ง๋ง ์ฐจ์ด์ ์ ์ธํฐํ์ด์ค๊ฐ ์ด์ง ๋ค๋ฅด๋ค.
