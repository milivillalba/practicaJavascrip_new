//PRACTICO Nro 3/EJERCICIOS DE OBJETOS.

// 1° EJERCICIO.

let producto = {
  nombre: "Nombre del producto",
  precio: 0,
  cantidad: 0,
};
function calculaTotal(producto) {
  return producto.precio * producto.cantidad;
}
let miProducto = {
  nombre: "Camiseta",
  precio: 15,
  cantidad: 2,
};

let totalPagar = calculaTotal(miProducto);
console.log("Total a pagar: $" + totalPagar);

// 2° EJERCICIO.

let persona = {
  nombre: "",
  edad: 0,
  profesion: "",
};
// Presentar a la persona
function presentarPersona(persona) {
  console.log("Nombre: " + persona.nombre);
  console.log("Edad: " + persona.edad);
  console.log("Profesión: " + persona.profesion);
}
presentarPersona(miPersona);

// 4° EJERCICIO.

function esMayorEdad(persona) {
  return persona.edad >= 18;
}
let resultado = esMayorEdad(miPersona);
console.log(resultado); // Devuelve true si es mayor de edad, de lo contrario false
