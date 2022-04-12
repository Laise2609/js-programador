console.log("loops!")

/* Estruturas tradicionais: 
- while
- do/while
- for */

//Exemplo loop while (enquanto)
console.log("while");

//Variável de controle do loop
let i = 1;
//i j k -> mais usadas para identificar ferramentas de repetição

while(i <=10){
    console.log(`Valor de i: ${i}`);
    i++; //++ -> incremento
}


console.log("-----------------------------------")

console.log("do/while")

let j = 1; // variável de controle
do{
    console.log(`J vale: ${j}`)
    j++;
} while(j<=3)

//while: se o valor não for verdadeiro ele não vai funcionar
//do/while: ele fará primeiro o que está programado para fazer, se não for verdadeiro ele para de executar

console.log("-----------------------------------")

console.log("for")

for(let i = 1; i <= 5; i++){
    console.log(`I vale: ${i}`)
}

console.log("-----------------------------------")

console.log("Loop e Estrutura de Dados")

let alunos = ["Eduardo", "Vagner", "Thalia", "Claudio", "Jéssica"];

for( let i = 0; i < 5; i++){
    console.log(alunos[i] );
}

console.log("-----------------------------------")

console.log("Loops exclusivo do JS")

//for/of: ótimo ´para arrays (vetores)
for( let aluno of alunos ){
    console.log(aluno);
}

let livro = {
    titulo: "Senhor dos Anéis",
    ano: 1954,
    volumes: 3
}

//for/is
for(let dados in livro){
    console.log(livro[dados]);
}