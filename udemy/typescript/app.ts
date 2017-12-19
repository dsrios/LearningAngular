import { setTimeout } from "timers";
import { reject } from "../../angular-tour-of-heroes/node_modules/@types/q";

let nombre:string = "Diego";
let numero : number = 123;
let booleano : boolean = true;
let hoy : Date = new Date();
let cual: any ;

function activar (quien:string, 
                objeto:string = "batiseñal",
                momento?:string){
    let mensaje:string;

    if (momento){
        mensaje = `${quien} activó la señal ${objeto} en la ${momento}`;
    }else{
        mensaje = `${quien} activó la señal ${objeto}`;
    }

    console.log(mensaje);
}

activar("Peter", "batiseñal", "tarde");

//Funciones de Flecha

let miFuncion = function (a){
    return a;    
}

let miFunctionF = a => a;

let miFunction2 = function (a:number, b:number){
    return a+b;
}

let miFuncion2f = (a:number, b:number) => a+b;

let miFunction3 = function (nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFunction3f = (nombre:string) =>{
    nombre = nombre.toUpperCase();
    return nombre;
}

//Funcionalidad de las flechas

let hulk ={
    nombre:"Hulk",
    smash(){
        setTimeout(function (){
            console.log(this.nombre + "smash!!");
        }, 1500)
    }
}

let hulkFlecha = {
    nombre: "Hulk Flecha",
    smash(){
        setTimeout(() => console.log(this.nombre + "smash!!"), 1500);
    }
}

hulk.smash();

//Desestructuracion de Objetos y Arrays

let objeto = {Nombre:"Nombre1", Apellido:"Nombre2", Poder:"Nombre3"};
let {Nombre, Apellido, Poder} = objeto;

let array = ["Hulk", "Capitan America", "Iron Man"];
let [pos1, pos2, pos3] = array;

//Promesas

let prom1 = new Promise ( function (resolve, reject){
    setTimeout( () => {
        console.log("Promesa Terminada");

        //Termino bien
        resolve();

        //Termina mal
        //reject();



    }, 1500)
})


prom1.then(function (){
    console.log("Paso bien");
}, function(){
    console.error("Ejecutar si algo sale mal")
})

//Interfaces
interface Xmen{
    nombre:string,
    poder:string
}

function enviarMision (xmen : Xmen){
    console.log("Enviar a:"+ xmen.nombre);
};

let wolverine:Xmen = {
    nombre:"Wolverine",
    poder:"Regeneracion"
}

//Clases, propiedades y metodos

class Avenger {
    nombre: string = "Antman";
    equipo:string;
    nombreReal:string;

    puedePelear:boolean;
    peleasGanadas:number;

    constructor(){
        
    }
}

let antman:Avenger = new Avenger();

console.log(antman);