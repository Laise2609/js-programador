const subExemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

//Exemplo 1: Monitor de Evento 
subExemplo01.addEventListener("click", function(){
    msg.textContent = "ola";
});

subExemplo01.addEventListener("dblclick", function(){
    msg.textContent = "";
});

//Exemplo 2: modo noturno
const botao = document.querySelector("#noturno");   
const pagina = document.querySelector("body");

botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno"); //toggle: botão de liga e desliga
    if ( botao.textContent == 'Ativar') {
        botao.textContent = "Desativar";
    } else {
        botao.textContent = "Ativar";
    }
});

//Exemplo 3: simulação de cadastro

const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

//Detectar o acionamento do formulário
//Obs: a função dentro do listener é chamada de Callback 
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("OK!")

    //1- capturar os dados digitados nos campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2= parseFloat(campoNota2.value);

    //2- calcular a média das notas
    let media = (nota1 + nota2) / 2;

    //3- criando elemento dinâmicamente
    //3.1- criar o elemento/tag
    let paragrafo = document.createElement("p");

    if( media >= 7){
        situacao = 'Aprovado'
    } else {
        situacao = 'Reprovado'
    };

    //3.2- montar o conteúdo da tag
    paragrafo.innerHTML = `<b>${nome}</b> - <i>${media}</i> - <b>${situacao}</b>`;

    //3.3- adicionar tag/conteúdo à div de resultados
    divResultados.appendChild(paragrafo);

    // campoNome.value = ''
    // campoNota1.value = ''
    // campoNota2.value = ''

    formulario.reset();

    /* Exercícios
    1- programe o necessário para determinar se o aluno está aprovado o reprovado.
    Critério: média maior/igual a 7 aprovado, caso contrário reprovado.
    
    2- mostre a situação do aluno junto com o nome e a média
    
    Desafio: faça com que os campos do formulário sejam resetados ao enviar*/

    console.log(paragrafo);
});

