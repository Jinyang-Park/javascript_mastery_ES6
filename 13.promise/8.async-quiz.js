function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => egg`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 계란후라이`);
}

function getChicken() {
  return Promise.reject(new Error("노 치킨"));
  //   return Promise.resolve(`plant => 레알치킨`);
}

//   getChicken()
//     .catch(() => "닭대가리")
//     .then(fetchEgg)
//     .then(fryEgg)
//     .then(console.log);

async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = "닭대가리";
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFriedEgg().then(console.log);
