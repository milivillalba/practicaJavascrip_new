//Ejercicio 1

function esMayorEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
//ejemplo
console.log(esMayorEdad(18)); //devuelve true(es mayor de edad)
console.log(esMayorEdad(14)); //devuelve false(es menor de edad)

// Ejercicio 2

function calcularAreaRectangulo(base, altura) {
  let area = base * altura;
  return area;
}
//ejemplo
console.log(calcularAreaRectangulo(15, 20)); //devuelve -> area: 300
console.log(calcularAreaRectangulo(5, 10)); //devuelve -> area: 50

//EJERCICIO 3.
function esPalindromo(cadena) {
  let cadenaInvertida = cadena.split("").reverse().join("");
  return cadena === cadenaInvertida;
}
console.log(esPalindromo("radar")); // Devuelve true
console.log(esPalindromo("hola")); // Devuelve false

//EJERCICIO 4.
function generaNumeroAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  return numeroAleatorio;
}
console.log(generaNumeroAleatorio()); // Devuelve un número aleatorio entre 1 y 10
console.log(generaNumeroAleatorio()); // Devuelve otro número aleatorio entre 1 y 10
