/**
 * Estructuras de datos
 * Objetos en JS
 */
// Objects - Conjunto de elementos donde el orden no es importante
// Manjena una estructura de "pares" key:value

// key es un string, es un valor único en el objeto
// value es un valor de cualquier tipo
// Sintaxis: {  key1: value1, key2: value2, key3: value3}
// Sintaxis para acceder a los elementos: nombreDelObjeto.key1

// const variableDemo = 5;
// const variableDemo = { .... };

const objetoDemo = {
  soyUnaLlave: "valorString",
  llave2: 2345,
  llave3: true,
  llave4: "soyOtroString",
  llave5: {
    subLlave1: 777,
    subLlave2: {
      sub2Llave1: {
        sub3Llave1: 123,
      },
    },
  },
};

console.log(objetoDemo);
console.log(objetoDemo.soyUnaLlave);
console.log(objetoDemo.llave2);
console.log(objetoDemo.llave3);
console.log(objetoDemo.llave4);
console.log(objetoDemo.llave5.subLlave1); // 777
console.log(objetoDemo.llave5.subLlave2.sub2Llave1.sub3Llave1);

const valorDeObjeto = objetoDemo.llave5.subLlave1;

// console.log(objetoDemo.llave5.subLlave1.llaveFalsa); //  777.llaveFalsa   =>    undefined
// console.log(objetoDemo.llave5.subLlave1.llaveFalsa.llaveFalsa2); //  undefined.llaveFalsa2   => Error

console.log("Funciones en Objetos:");
// Funciones anónimas dentro de objetos
const copiaDeConsole = {
  copiaDeLog: function (param1) {
    console.log("Soy una funcion dentro de un objeto: " + param1);
  },
  valorSimple: 5,
};

// copiaDeConsole.valorSimple;

copiaDeConsole.copiaDeLog("Copia correcta");
