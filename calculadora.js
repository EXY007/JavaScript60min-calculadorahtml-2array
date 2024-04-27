console.log("JS conectado correctamente");


const txtOp1 = document.getElementById("op1");
const txtOperador = document.getElementById("operador");
const txtOp2 = document.getElementById("op2");

const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

/*
es como agregarle un escuchador de evento
y le damos los dos argumentos, el 'click' y la funcion 
ahora lo estoy haciendo desde el html con onclick=calcular()

btnCalcular.addEventListener('click' , calcular)
*/
function calcular() {
    console.log("apretaste btn calcular");
    console.log(txtOperador.value);
    const operador = txtOperador.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)
    


    if ((operador == "+" || operador == "-" || operador == "*" || operador == "/") && !isNaN(op1)&&!isNaN(op2)) {
pResultado.innerText = "calculo posible"
let resultado;
switch (operador){
case "+":  resultado = op1+op2 ;
break;

case "-":  resultado = op1-op2 ;
break;

case "*":  resultado = op1*op2 ;
break;

case "/":  resultado = op1/op2 ;
break;



}
pResultado.innerText ='='+ resultado;
pResultado.style = "black"



    }
    else {
        pResultado.innerText = "calculo imposible"
        pResultado.style = "color:red"
    }
}