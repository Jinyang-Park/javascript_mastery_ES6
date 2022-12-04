//Bubbling up, propagating
function a() {
  throw new Error("error!");
}

function b() {
  try {
    a();
  } catch (error) {
    console.log("생각하보니 내가 못잡아");
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log("Catched!");
}
console.log("done!");
