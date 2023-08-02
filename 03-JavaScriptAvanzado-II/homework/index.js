// function saludar (saludo){

// // saludo = chau
//   return function(nombre){

//     console.log(saludo + " " + nombre) // `${saludo} ${nombre}`
//   }
// }

// let saludarHola = saludar("hola")

// let despedirse = saludar("chau")

// console.log(saludarHola); // ==>  hola

// saludarHola("Gama")
// despedirse()

// const condeContar = function () {
//   let cuentaGalletas = 0; // innicializamos un contador

//   return function () {
//     cuentaGalletas++; // agregamos 1 al contador
//     console.log(`${cuentaGalletas} galletas`);
//   };
// };

// const contar = condeContar(); // => 0

// contar();
// contar();
// contar();
// contar();
// contar();

// const contar2 = condeContar(); // => 0

// contar2();
// contar2();

// contar();

// var creaFuncion = function () {
//   var arr = []; //==>> [0,1,2]

//   for (var i = 0; i < 3; i++) {
//     arr.push(() => console.log(i));
//   }

//   return arr;
// };

// var array = creaFuncion();

// array[0](); // 0
// array[1](); // 1
// array[2](); // 2

/// CALL BIND APPLY

const griffindor = {
  casa: "Griffindor",
  ubicacion: "Torre del castillo",
  alumnos: [], //> [{alumno: Fulanito de Tal}]
  sombrero(nombre, apellido) {
    console.log(
      `${nombre} ${apellido} has sido asignado a ${this.casa} y tu sala comun se encuentra en ${this.ubicacion}`
    );
    this.alumnos.push({alumno: `${nombre} ${apellido}`});
  },
};

griffindor.sombrero("Harry", "Potter");
griffindor.sombrero("Hermione", "Granger");

console.log(griffindor.alumnos);

const slytherin = {
  casa: "Stlytherin",
  ubicacion: " La mazmorra del catillo",
  alumnos: [],
};

const seleccionador = griffindor.sombrero;

// console.log(seleccionador);

// No funca
// seleccionador("Draco", "Malfoy");

// CALL

seleccionador.call(slytherin, "Draco", "Malfoy");

const ravenclaw = {
  casa: "Ravenclaw",
  ubicacion: "Torre de astronomia",
  alumnos: [],
};

seleccionador.call(ravenclaw, "Cho", "Chang");

const hufflepuff = {
  casa: "Hufflepuff",
  ubicacion: "La cocina del colegio",
  alumnos: [],
};

seleccionador.call(hufflepuff, "Newt", "Scamander");

// Apply -> igual que call pero con arrays

const dataAlumnos = ["Cedric", "Diegory", "Otro"];

seleccionador.call(hufflepuff, dataAlumnos); // sombrero("CedricDiegory")
seleccionador.apply(hufflepuff, dataAlumnos); // sombrero("Cedric" , "Diegory")

// Gracias a ES6

seleccionador.call(hufflepuff, ...dataAlumnos);

// BIND

//          sombrero.atar (slitherin ,nombre , apellido)

//                                              THIS
const seleccionSlytherin = seleccionador.bind(slytherin);

seleccionSlytherin("Tom", "Riddle");

console.log(slytherin.alumnos);

const weasleys = ["Ginny", "Percy", "George", "Fred", "Charly"];

//                                             THIS    ,  nombre    ,
const seleccionWeasleys = seleccionador.bind(griffindor, "Weasley");

seleccionWeasleys("Ginny");

// weasleys.forEach((nombre) => {
//   seleccionWeasleys(nombre);
// });
