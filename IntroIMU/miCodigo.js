// Tipos de datos
// Operadores
// Funciones

/**
 * Introducción a JavaScript (JS)
 * JS es un lenguaje interpretado
 * JS no tiene tipado
 */

/**
 * Variables
 * Sintaxis antigua:
 * var nombreDeLaVariable = "VALOR"; // String, numero, booleano, array, objeto
 *
 * Sintaxis actual:
 * const camelCase = "VALOR"
 * const nombreDeLaVariable = "VALOR"; // String, numero, booleano, array, objeto
 * const Nombre_DE_la_VaRiaBle34 = "VALOR"; // String, numero, booleano, array, objeto
 * let nombreDeLaVariable = "VALOR"; // String, numero, booleano, array, objeto
 */

/**
 * Tipos de datos
 */
// String
// Sintaxis en Java: String miString = "string6";

// Antes se usaba var
var miString = "abc";
console.log(miString);

// Number
// En Java: Int miInt = 6;
// En Java: Double miDouble = 6;
// En Java: Float miFloat = 6.42;

var miNumero = 12345;
console.log(miNumero);

// Boolean
// En Java: Bool miBool = false;

// true /  false
var miBooleano = false;
console.log(miBooleano);

/**
 * JS es de tipo dimánico
 */

var varible = "SoyString";

console.log(varible);

varible = 234;

console.log(varible);

// var es reemplazada por const & let
// const
const miConst = "SoyConst";
console.log(miConst);
//miConst = "Otro String";  // Error
// miConst = 123;           // Error
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

/**
 * Funciones en JS
 */

// No se ejecuta inmediatamente
// Se ejecuta cuando se llama a la función

console.log("FUNCIONES:");
function miFuncion() {
  console.log("Hola!");
}

miFuncion();

// Las funciones pueden recibir parámetros

function suma(a, b, c) {
  console.log(a + b + c);
}

suma(2, 3, 1); //6
suma(1, 7, 1); // 9
suma("abc", 3, "def"); //"abc3def"

// Las funciones pueden retornar datos
console.log("FUNCIONES CON RETURN:");

function obtenerSuma(a, b, c) {
  const resultado = a + b + c;
  return resultado;
}

const miResultado = obtenerSuma(1, 2, 3);
console.log(miResultado);

console.log(obtenerSuma(2, 3, 4));

// Funciones en Objectos - Métodos
const objetoConFuncion = {
  prueba: function () {
    console.log("Esto es una prueba");
  },
};

objetoConFuncion.prueba();

// console.log()
// document.getElementById("#unId");
