/* Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, 
por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5]. */
function arrayNegativo(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) arr[i] = "big";
  }
  return arr;
}
/* console.log(arrayNegativo([-1, 3, 5, -5])); */

/* Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. 
La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. */
function minMax(arr) {
  var min = arr[0],
    max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(min);
  return max;
}
/* console.log(minMax([-1, 3, 5, -5])); */

/* Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar. */
function penultimoUltimo(arr) {
  var penultimo = arr[arr.length - 2],
    ultimo = 0;
  console.log(penultimo);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1 || arr[i] % 2 == -1) {
      ultimo = arr[i];
      return ultimo;
    }
  }
}
/* console.log(penultimoUltimo([2, -1, 9, -5])); */

/* Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. */
function doble(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
/* console.log(doble([1, 2, 3])); */

/* Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el 
número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array 
original y devuelve [-1,1,1,3]. */
function contarPositivos(arr) {
  cont = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      cont++;
    }
  }
  arr[arr.length - 1] = cont;
  return arr;
}
/* console.log(contarPositivos([-1, 1, 1, 1])); */

/* Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares 
seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) 
“¡Es para bien!”. */
function tresNumeros(arr) {
  for (var i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
      console.log(arr[i], arr[i + 1], arr[i + 2]);
      console.log("¡Es para bien!");
    }
    if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 1) {
      console.log(arr[i], arr[i + 1], arr[i + 2]);
      console.log("¡Qué imparcial!");
    }
  }
}
/* tresNumeros([1, 6, 2, 4, 5, 9, 11]); */

/* Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente 
a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y 
devuelve arr. */
function incrementoImpar(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
      arr[i]++;
    }
    console.log(arr[i]);
  }
  return arr;
}
/* console.log(incrementoImpar([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); */

/*Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, 
reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, 
longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4].
Pista: ¿For loops solo puede ir hacia adelante? */
function longitudesPrevias(arr) {
  var newArr = [];
  newArr[0] = arr[0];
  for (var i = 1; i < arr.length; i++) {
    newArr[i] = arr[i - 1].length;
  }
  return newArr;
}
/* console.log(longitudesPrevias(["programar", "dojo", "genial", "asd", "hooa"])); */

/* Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores 
del original, pero sumando 7 a cada uno. No alteres el array original. 
Por ejemplo, agregaSiete([1,2,3]) debería devolver [8,9,10] en un nuevo array. */
function agregaSiete(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += 7;
  }
  return arr;
}
/* var arr = [1, 2, 3];
var newArr = agregaSiete(arr);
console.log(newArr); */

/* Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
Ejemplo: invertir([3,1,6,4,2]) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores). */
function swapArr(arr) {
  var temp;
  console.log(arr);
  for (var i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
/* console.log(swapArr([3, 1, 6, 4, 2, 1, 7, 8])); */

/* Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array 
original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5]. */
function arrNegative(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      var a = 2 * arr[i];
      arr[i] -= a;
    }
  }
  return arr;
}
/* console.log(arrNegative([1, -3, 5])); */

/* Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno 
de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. */
function hambriento(arr) {
  cont = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "comida") {
      console.log("yummy");
      cont++;
    }
  }
  if (cont == 0) console.log("tengo hambre");
}
//hambriento(["comida", "asd", "comida", "asd", "comida"]);
//hambriento(["asd", "asd", "asd", "asd", "asd"]);

/* Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. 
Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. 
cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) 
el array esta vez. */
function cambiaHaciaElCentro(arr) {
  var temp;
  console.log(arr);
  for (var i = 0; i < arr.length / 2; i++) {
    if (i % 2 == 0) {
      temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  }
  return arr;
}
/* console.log(cambiaHaciaElCentro([1, 2, 3, 4, 5, 6])); */

/* Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el 
número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3) debería devolver [3,6,9]. */
function escalaArray(arr, x) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= x;
  }
  return arr;
}
/* console.log(escalaArray([1, 2, 3], 3)); */
