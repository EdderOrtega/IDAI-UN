// console.log("hola mundo");

// alert("mensaje desde el alert");

// console.log(5 + 367);
// console.warn("estamos dando tips");

// let nombre = "Eder";
// let matricula = 1234567890;

// alert("Nombre alumno es: " + nombre + " matricula: " + matricula);

// let precio = 150.5;
// let multriplicar = 4 * 4;
// let suma2 = 5 + 4;
// let apellido = "Ortega";
// let estadoCivil = "Soltero";

// console.log(amigos);
// console.log(amigos[0]);

// alert("Mi apellido es: " + apellido + " Estado civil es:" + estadoCivil);

// console.log(multriplicar);
// console.log(suma2);

// function suma(num1, num2) {
//   return num1 + num2;
// }

// alert(suma(2, 5));

let amigos = ["Elena", "Brandon", "Ale", "Daniel", "Pedro"];
let edades = [25, 20, 22, 24, 20];
console.log(amigos);
amigos[2] = "Alejandra";
console.log(amigos);
console.log(amigos.length);
amigos.push("Juan", "Miguel", "Alan");
console.log(amigos);
amigos.pop();
console.log(amigos);
let arrayJuntos = amigos.concat(edades);
console.log(arrayJuntos);
let familia = ["Graciela", "Adrian", "Sandra"];

let edadesOrdenadas = edades.sort();
console.log(edadesOrdenadas);

document.write(edades);

console.log(document.writeln(amigos.concat(familia)));

if (edades[0] > edades[1]) {
  document.write(edades);
  console.log("Edad posicion 0 es mayor");
} else {
  document.write("Es menor");
  console.log("Edad posicion 1 es menor");
}
