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
});

