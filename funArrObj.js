// EJERCICIOS FINALES/Resolver los siguientes ejercicios utilizando Funciones, Arreglos y Objetos.
// 1-
let numero = prompt("Ingrese un número:");
numero = Number(numero);

if (numero > 0) {
  console.log("El número ingresado es positivo.");
} else if (numero < 0) {
  console.log("El número ingresado es negativo.");
} else {
  console.log("El número ingresado es igual a cero.");
}

// 2-
let numero2 = prompt("Ingrese un número:");
numero = parseInt(numero2);
function esPrimo(numero2) {
  if (numero2 <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero2); i++) {
    if (numero2 % i === 0) {
      return false;
    }
  }
  return true;
}

if (esPrimo(numero)) {
  console.log("El número ingresado es primo.");
} else {
  console.log("El número ingresado no es primo.");
}

// 3-
let temperatura = prompt("Ingrese la temperatura:");
temperatura = parseFloat(temperatura);
let unidad = prompt(
  "Ingrese la unidad de temperatura ('C' para Celsius o 'F' para Fahrenheit):"
);
function celsiusAFahrenheit(temperatura) {
  return (temperatura * 9) / 5 + 32;
}
function fahrenheitACelsius(temperatura) {
  return ((temperatura - 32) * 5) / 9;
}
if (unidad.toUpperCase() === "C") {
  let temperaturaFahrenheit = celsiusAFahrenheit(temperatura);
  console.log(
    temperatura +
      " grados Celsius equivalen a " +
      temperaturaFahrenheit +
      " grados Fahrenheit."
  );
} else if (unidad.toUpperCase() === "F") {
  let temperaturaCelsius = fahrenheitACelsius(temperatura);
  console.log(
    temperatura +
      " grados Fahrenheit equivalen a " +
      temperaturaCelsius +
      " grados Celsius."
  );
} else {
  console.log(
    "Unidad de temperatura no válida. Por favor, ingrese 'C' para Celsius o 'F' para Fahrenheit."
  );
}

// 4-

let totalCompra = 0;

function calcularTotalCompra() {
  console.log("Total de la compra: $" + totalCompra);
}

while (true) {
  let precioProducto = prompt(
    "Ingrese el precio del producto (o ingrese 'total' para obtener el total de la compra):"
  );

  if (precioProducto.toLowerCase() === "total") {
    calcularTotalCompra();
    break;
  }
  let precio = parseFloat(precioProducto);
  // NaN es la abreviatura de not-a-number.
  if (!isNaN(precio)) {
    totalCompra += precio;
  } else {
    console.log(
      "Precio no válido. Por favor, ingrese un número válido o 'total' para obtener el total de la compra."
    );
  }
}
