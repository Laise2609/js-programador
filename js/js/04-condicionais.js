console.log("okayr")

/* Estrutura Condicional
if, else, else if 

Operadores relacionais (usados com condicionais)
>
<
>=
<=
==
!=*/

/* exemplo 1: condicional simples */
let numero = 10;

if(numero>0){
    console.log(`${numero} é maior que zero`);
}

let aluno = "João";

let nota1 = 6;

let nota2 = 8;

let media = (nota1 + nota2) / 2;

console.log(`Aluno: ${aluno}`);

console.log(`Notas: ${nota1} e ${nota2}`);

console.log(`Média: ${media.toFixed(2)}`)

let situacao; //indefinida
if(media>7){
    console.log(`aprovado`);
} else {
    console.log(`reprovado`);
}

console.log(situacao);

//exemplo 3: condicional encadeada (if, else if, else)

let desempenho;
if(media<3){
    desempenho = "péssimo"
} else if(media<5){
    desempenho = "ruim"
} else if(media<7){
    desempenho = "regular"
} else if(media<9){
    desempenho = "bom"
} else {
    desempenho = "ótimo"
}

console.log(desempenho)