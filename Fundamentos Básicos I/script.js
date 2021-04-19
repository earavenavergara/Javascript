/* Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255. */
function array() {
  var array = [];
  for (var i = 1; i <= 255; i++) {
    array.push(i);
  }
  return array;
}
/* console.log(array()); */

/* Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000
 - Puedes usar un operador de módulo para este ejercicio.  */
function sumaPar() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 == 0) sum += i;
  }
  return sum;
}
/* console.log(sumaPar()); */

/* Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 
(ej: 1+3+5+...+4997+4999). */
function sumImpar() {
  var sum = 0;
  for (var i = 1; i <= 5000; i++) {
    if (i % 2 == 1) sum += i;
  }
  return sum;
}
/* console.log(sumImpar()); */

/* Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array 
(ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).  */
function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
/* console.log(sumArray([-5, 2, 5, 12])); */

/* Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor 
(ej: para [-3,3,5,7] el número mayor (max) es 7).  */
function numMax(array) {
  var max = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}
/* console.log(numMax([-3, 3, 5, 7])); */

/* Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio 
de los valores (ej: para [1,3,5,7,20] el promedio es 7.2). */
function avg(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
/* console.log(avg([1, 3, 5, 7, 20])); */

/* Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 
(ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’. */
function arrayImpar() {
  var array = [];
  for (var i = 1; i <= 50; i++) {
    if (i % 2 == 1) array.push(i);
  }
  return array;
}
/* console.log(arrayImpar()); */

/* Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, 
esto son 5 y 7). */
function valoresMax(array, y) {
  cont = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > y) cont++;
  }
  return cont;
}
/* console.log(valoresMax([1, 3, 5, 7], 3)); */

/* Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado 
del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]). */
function cuadradoArray(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] *= array[i];
  }
  return array;
}
/* console.log(cuadradoArray([1, 5, 10, -2])); */

/* Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo 
dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos 
(ej: [1,5,10,-2] se convertirá en [1,5,10,0]). */
function arrayPositivo(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) array[i] = 0;
  }
  return array;
}
/* console.log(arrayPositivo([1, 5, 10, -2])); */

/* Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo 
contenga el valor mayor (max), menor (min) y promedio (avg) del array original 
(ej: [1,5,10,-2] devolverá [10,-2,3.5]). */
function maxMinAvg(arr) {
  var max = 0,
    min = 0,
    sum = 0;
  var array = [max, min, 0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      array[0] = arr[i];
    }
    if (arr[i] <= min) {
      array[1] = arr[i];
    }
    sum += arr[i];
  }
  array[2] = sum / arr.length;
  return array;
}
/* console.log(maxMinAvg([1, 5, 10, -2])); */

/* Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. 
La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).  */
function swap(arr) {
  var temp = 0;
  if (arr.length > 1) {
    temp = arr[arr.length - 1];
    arr[arr.length - 1] = arr[0];
    arr[0] = temp;
  }
  return arr;
}
/* console.log(swap([1, 5, 10, -2])); */

/* De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo 
por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2]. */

function negDojo(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) arr[i] = "Dojo";
  }
  return arr;
}
/* console.log(negDojo([-1, -3, 2])); */
