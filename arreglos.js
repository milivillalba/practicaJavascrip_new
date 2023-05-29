//EJERCICIO 1:

function obtenerSuma(arreglo) {
  let suma = 0;

  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }

  return suma;
}
//devuelve la suma de todos los arreglos
console.log(obtenerSuma([2, 4, 6, 8, 10])); //suma todos los numeros: total-> 30

//EJERCICIO 2

function obtenerPares(arreglo) {
  var pares = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      pares.push(arreglo[i]);
    }
  }
  return pares;
}
console.log(obtenerPares([1, 2, 3, 4, 5, 6])); // Devuelve [2, 4, 6]
console.log(obtenerPares([10, 15, 20, 25])); // // Devuelve [10, 20]

// EJERCICIO 3.
function obtenerPromedioPonderado(notas, pesos) {
  if (notas.length !== pesos.length) {
    // El método throw reanuda la ejecución de un generador al lanzar un error en éste y regresar un objeto con las dos propiedades done y value.
    throw new Error("Los arreglos deben tener la misma longitud.");
  }
  let totalNotas = 0;
  let totalPesos = 0;
  for (let i = 0; i < notas.length; i++) {
    totalNotas += notas[i] * pesos[i];
    totalPesos += pesos[i];
  }
  const promedioPonderado = totalNotas / totalPesos;
  return promedioPonderado;
}
// EJERCICIO 4.
function obtenerMaximo(arreglo) {
  if (arreglo.length === 0) {
    throw new Error("El arreglo está vacío.");
  }

  let maximo = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
      maximo = arreglo[i];
    }
  }
  return maximo;
}
const numeros = [5, 9, 2, 14, 8, 1];
const maximo = obtenerMaximo(numeros);
console.log("El número máximo es:", maximo);
