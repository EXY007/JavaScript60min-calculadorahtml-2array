let miArreglo = ["Luis","fernando","medina","aguilera","Meli"]

/*
console.log(miArreglo);

for (let i = 0; i<miArreglo.length; i++)
{
    if (miArreglo[i].length==4)
     {
        console.log(miArreglo[i]);
    }
}
*/
let miArreglo2=miArreglo;


for (let i = 0; i<miArreglo2.length; i++)
{
    console.log("accediendo al indice: "+i);
        console.log(miArreglo[i]);
    
}

//OBJETOS COMO ARREGLOS PERO PERMITE MAS

let miObjeto = {

    millave : "mi valor"

}


let persona1 = {

    nombre : "luis",
     edad : 25,
    masculino : true

}
//agrego nueva propiedad a persona1
 persona1.comidaFavorita = "hamburguesa";

let persona2 = {

    nombre : "Fernando",
    edad : 28,
    masculino : true

}

console.log(persona1,persona2);

//let miArregloObjetos = [persona1,persona2]

console.log("-----------------------------")
console.log(persona1);
console.log(persona1.edad)
console.log(persona1.edad=24)
console.log(persona1);
