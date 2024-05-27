//Variáveis Jogo
var enigmaNumero = 50;
var palpiteJogador = 0;
var palpiteRestantes = 10;
var suposicoesFeitas = 0;
var gameState = "";
var gameVitoria = false;

//Campos de entrada e saída
var input = document.querySelector("#input");
var output = document.querySelector("#output");

//Botão
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

// Entrar com a tecla ENTER pressionada
window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(event)
{
    if(event.keyCode === 13)
    {
        validateInput();
    }
}

function clickHandler()
{
    validateInput();
}

function validateInput()
{
    palpiteJogador = parseInt(input.value);

    if(isNaN(palpiteJogador))
    {
        output.innerHTML = "Por favor insira um número.";
    }
    else
    {
        playGame();
    }
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

        //Checar o fim do jogo
        if (palpiteRestantes < 1)
        {
            fimGame();
        }
    }
    else if(palpiteJogador < enigmaNumero)
    {
        output.innerHTML = "Está muito baixo." + gameState;

        //Checar o fim do jogo
        if (palpiteRestantes < 1)
        {
            fimGame();
        }
    }
    else if(palpiteJogador === enigmaNumero)
    {
        gameVitoria = true;
        fimGame();
    }
}

function fimGame()
{
    if (gameVitoria)
    {
        output.innerHTML
        = "Sim, é isto " + enigmaNumero + "!" + "<br>" 
        + "Só acertou você " + suposicoesFeitas + " palpite.";
    }
    else
    {
        output.innerHTML
        = "Não restam mais palpites!" + "<br>"
        + "O número era:" + enigmaNumero + ".";
    }
}




