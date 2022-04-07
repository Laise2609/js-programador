/* estruturas de dados no JavaScript 

ARRAY (vetor)
leista de dados indexados*/

let alunos = ["Tiago", "João", "Marília", "Vagner"];

/* dessa forma conseguimos ver os índices (números) */
console.log(alunos[1]);
console.log(alunos[3]);
console.log(alunos);

/* Exercício:
1) crie um array contendo os seguindo os seguintes dados de uma pessoa:
- nome e sobrenome
- idade
- cidade
- estado

2) mostre uma frase no console conforme o exemplo abaixo:
- Fulano da Silva é da cidade de São Paulo e tem 20 anos
 */

let carla = ["Carla", "Almeida", 22, "São Paulo", "SP"];

console.log(`${carla[0]} ${carla[1]} é da cidade de ${carla[3]} em ${carla[4]} e tem ${carla[2]} anos de idade`);

console.log(`-------------------------------------------------------------`);

/* OBJETO
Lista de dados não-índexados */

let filme = {
    /* propriedade: valor */
    titulo: "Homem Aranha",
    ano: 2021,
    genero: "Ação/Ficção",
};

console.log(filme.titulo);
console.log(filme.genero);
console.log(`${filme.titulo} foi lançado em ${filme.ano}`)

/* Exerdício:
1) Crie um novo objeto contendo os dados de um pedido de uma loja virtual, contendo:
- data do pedido
- produto comprado
- prazo de entrega

2) Mostre uam frase contendo as seguintes informações:
- o produto XYZ foi comprado em 07/09/2021 com entrega em 7 dias úteis*/

let produto = {
    produto: "calça",
    data: "07/05/2022",
    entrega: 15
}

console.log(`O produto ${produto.produto} chegará no dia ${produto.data} com entrega em ${produto.entrega} dias úteis`)

