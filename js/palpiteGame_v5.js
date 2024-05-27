//Variáveis Jogo
var enigmaNumero = Math.floor(Math.random() * 100);
var palpiteJogador = 0;
console.log(enigmaNumero);

var palpiteRestantes = 10;
var suposicoesFeitas = 0;
var gameState = "";
var gameVitoria = false;

//Campos de entrada e saída
var input = document.querySelector("#input");
var output = document.querySelector("#output");

//Botão
var button = document.querySelector("button");
button.addEventListener("click", clickHandler, false);
button.style.cursor = "pointer";

/*// Entrar com a tecla ENTER pressionada
window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(event)
{
  if(event.keyCode === 13)
  {
    validateInput();
  }
}*/

//O ponteiro
var ponteiro = document.querySelector("#ponteiro");

function render()
{
  //Posição da seta
  //Multiplicar o palpite dos jogadores por 3
  //Posição correta em pixel na escala

  ponteiro.style.left = palpiteJogador * 3 + "px";
}

function clickHandler()
{
  validateInput();
}

function validateInput()
{
  playersGuess = parseInt(input.value);
  
  //Se você está preocupado com o infinito, use isto:
  //!isNaN(palpiteRestantes) && isFinite(palpiteJogador);
  
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
  gameState 
    = " Guess: " + suposicoesFeitas 
    + ", Remaining: " + palpiteRestantes;
  
  palpiteJogador = parseInt(input.value);

  if(palpiteRestantes > enigmaNumero)
  {
    output.innerHTML = "Está muito alto." + gameState;
    
    //Checar o fim do jogo
    if (guessesRemaining < 1)
    {
      fimGameGame();
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
  //Update o display gráfico

    render();
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
      + "O número era: " + enigmaNumero + ".";
  }
  
  //Desabilitar botão
  button.removeEventListener("click", clickHandler, false);
  button.disabled = true;
  
  //Desabilitar o enter
  window.removeEventListener("keydown", keydownHandler, false);
  
  //Desabilitar o campo de entrada
  input.disabled = true;
}