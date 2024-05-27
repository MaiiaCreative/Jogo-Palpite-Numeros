//Variáveis Jogo
var enigmaNumero = 50;
var palpiteJogador = 0;
var palpiteRestantes = 10;
var suposicoesFeitas = 0;
var gameState = "";

//Campos de entrada e saída
var input = document.querySelector("#input");
var output = document.querySelector("#output");

//Botão
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

function clickHandler()
{
    playGame();
}

function playGame()
{
    palpiteRestantes = palpiteRestantes - 1;
    suposicoesFeitas = suposicoesFeitas + 1;
    gameState = " Palpite: " + suposicoesFeitas + ", Restante: " + palpiteRestantes;
    palpiteJogador = parseInt(input.value);
    if(palpiteJogador > enigmaNumero)
    {
        output.innerHTML = "Está muito alto." + gameState;
    }
    else if(palpiteJogador < enigmaNumero)
    {
        output.innerHTML = "Está muito baixo." + gameState;
    }
    else if(palpiteJogador === enigmaNumero)
    {
        output.innerHTML = "Na mosca, você acertou!!!";
    }
}