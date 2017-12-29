
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE:{nombre:string, edad:number} = {
  nombre: nombre,
  edad: edad
};

const constante = "Este valor no cambia";

// Cree una interfaz que sirva para validar el siguiente objeto
interface DC {
  nombre: string,
  artesMarciales: string[];//Arreglo de strings
}

let  batman:DC = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}

let resultadoDobleFlecha = (a:number,b:number) => (a+b)*2;


// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};

function getAvenger1 (NOMBRE:string, PODER?:string, ARMA:string = "arco"){
  let mensaje:string;
  if(PODER){
    mensaje = NOMBRE+" tiene el poder de: "+ PODER + " y un arma: "+ARMA;
    //template literal 
    mensaje = `${NOMBRE} tiene el poder de : ${PODER} y un arma: ${ARMA} `; 
  }else{
    mensaje = NOMBRE + " tiene un " + PODER;
    //template literal
    mensaje = `${NOMBRE} tiene un ${PODER}`;
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
  base:number;
  altura:number;
  
  constructor(){
  }

  calcularArea():number {
    return this.base * this.altura;
  }
}
