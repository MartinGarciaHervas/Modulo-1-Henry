// RECURSION

// Funcion que se llama a si misma

// fn HaceAlgo(){
// cortar cebolla a la mitad  1/2
// HaceAlgo()      1/4
//     Cuando para ??   -->>> nivel subatomico de cebollinas?? Noooo
//}

/// Que compone a una funcion recursiva?

// 1.- Caso Base (que estamos evaluando)
// 2.- Operacion de continuacion => (si no se cumple el caso base que hago como avanzo)
// 3.- Corte o REtorno (cuando se cumple con el caso base que devuelvo)

// Estructura base

// function recursiva(condition){
//   if(condition){ // caso base
//     return true // Corte o Retorno
//   } else {
//     recursiva(condition - 1) // Continuacion
//   }
// }

// function cuentaRegresiva(number) {
//   console.log(number);
//   let nuevoNumero = number - 1;
//   if (nuevoNumero === 0) {
//     return;
//   }
//   cuentaRegresiva(nuevoNumero);
// }

// cuentaRegresiva(10);

// const comunidad = [
//   "Aragorn 👑",
//   "Frodo 🙋‍♂️",
//   "Sam 🤷‍♂️",
//   "Pippin 🙍‍♂️",
//   "Merry 🙆‍♂️",
//   "Legolas 🏹",
//   "Gandalf 🧙‍♂️",
//   "Boromir 🧔‍♂️",
//   "Gimli 🪓",
// ];
// console.log(comunidad);

// function imprimePersonajes(personajes) {
// RECURSION
// if (personajes.length) {
//   let personajeIndividual = personajes.shift();
//   // console.log(personajes);
//   console.log(personajeIndividual);

//   //vuelvo a ejecutar
//   imprimePersonajes(personajes);
// }

// FOR
// for (let i = 0; i < personajes.length; i++) {
//   console.log(personajes[i]);
// }

// FOREACH
// personajes.forEach((personaje) => {
//   console.log(personaje);
// });

//MAP
// personajes.map((personaje) => {
//   console.log(personaje);
// });

// FOROF
// for (let personaje of personajes) {
//   console.log(personaje);
// }
// }

// imprimePersonajes(comunidad);

// const comunidad = [
//   "Frodo 🙋‍♂️", // 1
//   "Sam 🤷‍♂️",
//   "Pippin 🙍‍♂️",
//   "Merry 🙆‍♂️",
//   "Aragorn 👑", // 0
//   "Legolas 🏹",
//   "Legolas 🏹",
//   "Legolas 🏹",
//   "Gimli 🪓", // -1
//   "Gandalf 🧙‍♂️",
//   "Boromir 🧔‍♂️",
// ];

// // console.log(comunidad[1]);
// // console.log(comunidad.length); // 9
// // console.log(comunidad[comunidad.length - 1]);

// let muerto = comunidad.pop();

// // console.log(muerto);
// // console.log(comunidad);

// let muerto2 = comunidad.pop();

// // console.log(muerto2);

// //comunidad.unshift(muerto2);// inserta al principio

// comunidad.push(muerto2); // inserta al final
// // console.log(comunidad);

// // splice modifica el array original
// let seVanAMordor = comunidad.splice(0, 2);
// // console.log(seVanAMordor);

// // slice no modifica el array
// // comunidad.slice(0, 2);
// // console.log(comunidad.slice(0, 2));
// console.log(comunidad);

// console.log(comunidad.indexOf("Aragorn 👑"));

// // includes
// function traeAlRey(array) {
//   if (array.includes("Aragorn 👑")) {
//     console.log("Aragorn es el legitimo rey");
//     return;
//   }
//   console.log("Gondor needs no king");
// }

// traeAlRey(comunidad);

// // filter (devuelve todas las coincidencias)
// let elfo = comunidad.filter((element) => element === "Legolas 🏹");

// // console.log(elfo);
// // console.log(comunidad);

// // find (soilo devuelve la primera coincidencia)

// console.log(comunidad.find((element) => element === "Legolas 🏹"));

// const michiPizzeria = new Set([
//   "Hongos 🍄",
//   "Hawaianna / Anana 🍍",
//   "Especial 😺",
// ]);

// console.log(michiPizzeria);
// console.log(michiPizzeria.size);

// const nuevasPizzas = [
//   "Hongos 🍄",
//   "Hawaianna / Anana 🍍",
//   "Especial 😺",
//   "Rucula 🥬",
// ];

// function agregarPizzas() {
//   nuevasPizzas.forEach((pizza) => {
//     michiPizzeria.add(pizza);
//   });
// }

// agregarPizzas();

// console.log(michiPizzeria);

function Stack() {
  this.pila = [1, 2, 3, 4, 5];
}

// Stack.extraer( 5 )
// Stack.extraer( 4 )
