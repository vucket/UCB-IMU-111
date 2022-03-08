// Tipos de datos
// Operadores
// Funciones

/**
 * Introducción a JavaScript (JS)
 * JS es un lenguaje interpretado
 * JS no tiene tipado
 */

/**
 * Tipos de datos
 */
// String
// En Java: String miString = 6;

// Antes se usaba var
var miString = "abc";
console.log(miString);

// Number
// En Java: Int miInt = 6;

var miNumero = 12345;
console.log(miNumero);

// Boolean
// En Java: Bool miBool = false;

var miBooleano = false;

console.log(miBooleano);

// JS es de tipo dimánico

var varible = "SoyString";

console.log(varible);

varible = 234;

console.log(varible);

// var es reemplazada por const & let
// const
const miConst = "SoyConst";
console.log(miConst);
//miConst = "Otro String";
// miConst = 123;
// console.log(miConst);

// let -  es el nuevo var
let miLet = "SoyLet";
console.log(miLet);

miLet = 123;
console.log(miLet);

/**
 * Estructuras de datos
 */

// Arrays - Conjunto de elementos que tienen cierto orden
// []
// Los elementos pueden ser de distinto tipo
// Y tiene una longitud dinámica -> length
// Indíce basado en 0
// El primer elemento tiene la posición 0
// El segundo elemento tiene la posición 1
const unArray = [123, "abc", { llave1: "valor1" }];
console.log(unArray);
console.log(unArray[1]);
console.log(unArray.length);

// Objects - Conjunto de elementos donde el orden no es importante
// Manjena una estructura de "pares" key:value
// {}
// key es un string, es un valor único
// value es de cualquier tipo
const unObject = {
  llave1: "unString",
  llave2: 123,
  llave3: [123, 456],
  otroObject: {
    otroMas: 1,
  },
};

console.log(unObject);
console.log(unObject.otroObject);
console.log(unObject.otroObject.otroMas);

// document.getElementById("#unId");