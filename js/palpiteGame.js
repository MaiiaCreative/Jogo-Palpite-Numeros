//Variáveis Jogo
var enigmaNumero = 50;
var palpiteJogador = 0;

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
    palpiteJogador = parseInt(input.value);

    if(palpiteJogador > enigmaNumero)
    {
        output.innerHTML = "Está muito alto.";
    }
    else if(palpiteJogador < enigmaNumero)
    {
        output.innerHTML = "Está muito baixo.";
    }
    else if(palpiteJogador === enigmaNumero)
    {
        output.innerHTML = "Na mosca, você acertou!!!";
    }
}