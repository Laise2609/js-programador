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

function soma(valor1, valor2){
    let total = valor1 + valor2;
    return total
}

console.log( soma(10,5) );

let resultado = soma(100, 50);
console.log(resultado);

if (resultado < 1000){
    console.log("Abaixo da meta");
}