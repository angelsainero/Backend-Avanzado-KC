'use strict';

// funcion que devuelve una promesa
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (true) {
      //   reject(new Error('fatal'));
      // }
      resolve(54);
    }, ms);
  })
}

async function main() {

  const resultado = await sleep(2000);
  console.log(resultado);

  const resultado2 = await sleep(2000);
  console.log(resultado2);

  for(let i = 0; i < 5; i++) {
    console.log(await sleep(1000))
  }

}

main();