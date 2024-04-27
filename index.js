console.log("HolaMundo")
var numero = 5.25; 
console.log(numero)

var texto = "esto es un texto ";
console.log(texto)

var miBoleanoT = true ;
console.log (miBoleanoT);

console.log("mi edad es "+ numero);

numero = 6;
console.log("ahora mi edad es "+ numero)



let miVariableLet = 24;



const miConstante = 3;
console.log("el valor de mi constante es: " + miConstante);

/*
miConstante = 5;
console.log("el nuevo valor de mi constante es: " + miConstante);
*/

//CONDICIONAL
let num1 = 7;

let resultPregunta = num1 == 6;
console.log(resultPregunta);

if(num1 == 6)
{
console.log("si, mi numero vale "+ '6');

} 

else{

console.log("no, mi numero no vale 6");
}


/////////////////////////
console.log("------------------------------");
num2 = 6;

if(num2 == "6")
{
console.log("si");

} 

else{

console.log("no");
}


console.log("EL TRIPLE IGUAL tamien ve si es del mismo tipo:");
num3 = 6;

if(num3 === "6")
{
console.log("si");

} 

else{

console.log("no");
}

console.log("------------------------------");

let num4 = 28;
let nombre = "Luis";

if(num4 === 28 || nombre === "Luis")
{
console.log("si soy luis");

} 

else{

console.log("no soy luis");
}

console.log("------------------------------");
let minumT = 5;

if(minumT > 0)
{
    console.log("mi numero es positivo")
}

else if (minumT === 0)
{
console.log("mi numero es cero");
}

else{
    console.log("mi numero es negativo");
}


console.log("-------------while-----------------");
let contador= 0;
while (contador<5)
{   
console.log("HOLA A TODOS "+ contador);
contador++;
}
console.log("--------------for----------------");

for(let i=0; i<5; i++)
{
console.log("numero: "+i);
}
console.log("------------------------------");

saludar();
saludar();
saludaN(" Fernando", 33);
console.log("------------FUNCION------------------");

function saludar(){
    console.log("HOLA GENTE")
}
//las funciones resiven argumentos uno o varios en este
//caso los argumentos son nom2 y edad2
//esta funcion no retorna nada solo muestra lo de adentro
function saludaN(nom2,edad2){
    console.log("HOLA mi nombre es "+nom2);
    console.log("y mi edad es "+edad2);
}

saludaN(" Fernando", 28);


console.log("------------con return------------------");

//esta funcion si retorna
function multiplicar (numero1, numero2)
{
    let resultado = numero1*numero2;
  // console.log(resultado);
   return resultado;
}


let recibidor = multiplicar(2,5);
console.log(recibidor);

console.log(multiplicar(3,5));

//multiplicar(20,10);

console.log("------------var y let------------------");

var numvar = 10;
var numvar = 20;
//console.log(numvar);

function funvar()
{
    if (true) 
    {
        var myname = "Luis Medina";
        let exy = "return Fernando medina"//el let me impide sacar del if al return
        console.log(myname);              //tendria que ser var
        return exy;
    }
    

}

funvar();


 var minombre = funvar();
console.log(minombre);

console.log(funvar())













