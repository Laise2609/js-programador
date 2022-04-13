console.log("Funções!")

'use strict';
/* 
Funções são blocos de código podem ser executados e reaproveitados em praticamente qualquer parte da sua aplicação .

Usar funções tembém é uma forma de separar a lógica e organizar melhor sua programação*/

function linha(){
    console.log("------------------");
}

let curso = "Programador Web";
let escola = "Senac";
let ano = 2022;

console.log(`Curso: ${curso}`);
linha();
console.log(`Escola: ${escola}`);
linha();
console.log(`Ano: ${ano}`);

// function soma(valor1, valor2){
//     let total = valor1 + valor2;
//     return total
// }

//Versão 2: sintaxe ARROW FUNCTION (função seta/flecha)
//function está em desuso, agora CONST é mais usado 
const soma = (valor1, valor2) => {
    let total = valor1 + valor2;
    return total;
};
//return faz o resultado aparecer na tela, pois o console.log não fará isso acontecer

const soma2 = (valor1, valor2) => valor1 + valor2;
//resume a const de cima

console.log( soma2(10,5) );

let resultado = soma2(100, 50);
console.log(resultado);

if (resultado < 1000){
    console.log("Abaixo da meta");
}
linha()

//Versão 1: tradicional
/* function dobra(numero){
    let resultado = numero *2;
    return resultado
} */

//Versão1 simplificada
/* function dobra(numero){
    return numero *2;
}; */

//Versão 2; arrow function
/* const dobra = (numero) => {
    let resultado = numero *2;
    return resultado;
}; */

/* const dobra = (numero) => {
    return numero * 2;
}; */

//na arrow function pode tirar os parênteses se tiver apenas um parâmetro
//Versão 2 simplifaicada
const dobra = numero => numero *2;

console.log( dobra(10) );
console.log( dobra(150) );
linha();

let nota1 = 8.5;
let nota2 = 7.4;

const calcularMedia = (n1, n2) => {
    return (n1 + n2) / 2;
};

console.log( calcularMedia(nota1, nota2) );