/**
 * Funciones en JS
 */

// No se ejecuta inmediatamente
// Se ejecuta cuando se llama a la función
// Sintaxis:  function nombreDeLafuncion () { /* codigo a ser ejecutado */}
// Para llamar a la funcion:   nombreDeLafuncion();

function miFuncion() {
  console.log(123);
}
miFuncion();

// Funciones con parámetros
// Sintaxis:  function nombreDeLafuncion (param1, param2, param3) { /* codigo a ser ejecutado */}
// Para llamar a la funcion:   nombreDeLafuncion(val1, val2, val3);

function miFuncionConParams(a, b, c) {
  const resultado = a + b + c;
  console.log(resultado);
}

miFuncionConParams(2, 3, 5);
miFuncionConParams(2, 3, 5.2);
miFuncionConParams("Que es esto", 3, 5.2);
miFuncionConParams("Que es esto", "3", "5");
