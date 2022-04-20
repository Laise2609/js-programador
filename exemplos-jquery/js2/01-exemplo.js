'use strict'

const titulo = $("h1");

//CSS
// titulo.css("color", "blue");
titulo.css({
    "color" : "blue",
    "text-align" : "center",
    "font-size" : "25px"
});

//Manipulando evento
titulo.on("click", function(){
    $("body").css("background-color", "yellow");
    $("h2").text("clicou!!");

    titulo.fadeOut();
});