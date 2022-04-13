/* Funções de acesso/seleção ao DOM 

- getElementById -> seleciona um elemento através do ID

- querySelector -> seleciona um elemento através de um seletor (p b {text-align: center;})

- querySelectorAll -> selciona VÁRIOS elementos através do seletor
*/

// const titulo = document.getElementById("titulo-principal");
const titulo = document.querySelector("#titulo-principal");
const subtitulo = document.querySelectorAll("h2");

console.log(titulo);
console.log(subtitulo[0]);

//Leitura do conteúdo
console.log(titulo.textContent);
console.log(subtitulo[1].textContent);

//Alteração do conteúdo
titulo.textContent = "Olá DOM, meu velho amigo."
subtitulo[0].innerHTML = "<i>Aprendendo DOM </i>"

//Manipulando CSS via JS

// 1- Inline
const pagina = document.querySelector("body");
pagina.style.backgrounColor = "red";

// 2- Classe
const primeiroItem = document.querySelectorAll("#lista-editores li")
console.log(primeiroItem[0]);

primeiroItem.classList.add("destaque-item")