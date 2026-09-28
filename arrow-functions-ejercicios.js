// Para cada una de las funciones que tenemos aquí, pásalas a Arrow Functions

// Función 1
function sumar(a, b) {
  return a + b;
}
//Arrow function 1
const sumar = (a, b) => {
  let suma = a + b;
  return `El valor sumado entre ${a} y ${b} es ${suma}`
};

console.log(sumar(4, 6))


// Función 2
function cuadrado(numero) {
  return numero * numero;
}

//Arrow function 2
const cuadrado = (numero) =>{
  let valorCuadrado = numero * numero;
  return `El valor cuadrado de ${numero} es ${valorCuadrado}`;
};

console.log(cuadrado(6));

// Función 3
function obtenerUsuario(id) {
  return { id: id, nombre: "Usuario" + id };
}

//Arrow function 3

const obtenerUsuario = (id) =>{
  return {id: id, nombre: 'David: ' + id}
}

console.log(obtenerUsuario(123456));

// Función 4
function procesarLista(lista) {
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    resultado.push(lista[i] * 2);
  }
  return resultado;
}

//Arrow function 4

const procesarLista = (lista) =>{
  let resultado = [];
  for(let i = 0; i < lista.length; i++){
    resultado.push(lista[i] * 2);
  }
  return resultado;
}

console.log(procesarLista([1,4,6,8,12]));

//Función 5
(function() {
  console.log("Ejecutando una IIFE");
})();

//Arrow function 5

(() =>console.log('Ejecutando un IIFE');
)();

// Función 6
const objeto = {
  id: 10,
  obtenerId: function() {
    return this.id;
  }
};

//Arrow function 6

const objeto = {
  id: 10,
  obtenerId: () => this.id
};


// Función 7
const temporizador = {
  mensaje: "Listo!",
  iniciar: function() {
    setTimeout(function() {
      console.log(this.mensaje);
    }, 1000);
  }
};

//Arrow function 7

const temporizador = {
mensaje: 'Listo',
iniciar: function(){
  setTimeout(() => console.log(this.mensaje), 1000);
  }
};

temporizador.iniciar();
