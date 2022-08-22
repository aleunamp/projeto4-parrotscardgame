let numCartas;

let icons = [
  `imagens/bobrossparrot.gif`,
  `imagens/explodyparrot.gif`,
  `imagens/fiestaparrot.gif`,
  `imagens/metalparrot.gif`,
  `imagens/revertitparrot.gif`,
  `imagens/unicornparrot.gif`,
  `imagens/tripletsparrot.gif`
];

function QntdDeCartas() {
  while (numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0) {
    numCartas = Number(prompt("Deseja jogar com quantas cartas?"));
  }
}

QntdDeCartas();

let jogo = [];
let contador = 0;

function IniciarJogo() {
  icons.sort(comparador);

  while (jogo.length < numCartas) {
    jogo.push(
      `<div class="carta" onclick="cliqueNaCarta(this)">
            <div class="carta-frente"><img src="imagens/front.png"/></div>
            <div class="carta-tras escondido"><img src="${icons[contador]}"/></div>
            </div>`,
      `<div class="carta" onclick="cliqueNaCarta(this)">
            <div class="carta-frente"><img src="imagens/front.png"/></div>
            <div class="carta-tras escondido"><img src="${icons[contador]}"/></div>
            </div>`
    );
    contador += 1;
  }

  jogo.sort(comparador);
}

console.log(jogo);

function comparador() {
  return Math.random() - 0.5;
}

IniciarJogo();

function BaralhoNaTela() {
  for (let contador = 0; contador < jogo.length; contador++) {
    const baralho = document.querySelector(".distribuicao-de-cartas");
    baralho.innerHTML += jogo[contador];
  }
}

BaralhoNaTela();

let cartasSelecionadas = [];
let cartasCorretas = [];
let jogadas = 0;

function cliqueNaCarta(carta) {
  carta.classList.toggle("virada");

  let cartaFrenteSelecionada = carta.querySelector(".carta-frente");
  let cartaTrasSelecionada = carta.querySelector(".carta-tras");

  if (cartaFrenteSelecionada.classList.contains("escondido")) {
    cartaTrasSelecionada.classList.add("escondido");
    cartaFrenteSelecionada.classList.remove("escondido");
  } else {
    cartaFrenteSelecionada.classList.add("escondido");
    cartaTrasSelecionada.classList.remove("escondido");
    jogadas++;
  }

  cartasSelecionadas.push(carta);

  if (cartasSelecionadas.length === 2) {
    compararCartas();
  }

  if (cartasSelecionadas.length >= 3) {
    cartaFrenteSelecionada.classList.remove("escondido");
    cartaTrasSelecionada.classList.add("escondido");
  }

  if (cartasCorretas.length === numCartas) {
    setTimeout(jogoFinalizado, 1000);
  }
}

function compararCartas() {
    let primeiraCarta = cartasSelecionadas[0];
    let segundaCarta = cartasSelecionadas[1];
  
    if (
      primeiraCarta.querySelector(".carta-tras").innerHTML ===
        segundaCarta.querySelector(".carta-tras").innerHTML &&
      primeiraCarta !== segundaCarta
    ) {
      cartasCorretas.push(primeiraCarta);
      cartasCorretas.push(segundaCarta);
      cartasSelecionadas = [];
    } else {
      setTimeout(desvirarCartas, 1000);
    }
  }

  function desvirarCartas() {
    let primeiraCarta = cartasSelecionadas[0];
    let segundaCarta = cartasSelecionadas[1];
  
    primeiraCarta.querySelector(".carta-tras").classList.add("escondido");
    primeiraCarta.querySelector(".carta-frente").classList.remove("escondido");
  
    segundaCarta.querySelector(".carta-tras").classList.add("escondido");
    segundaCarta.querySelector(".carta-frente").classList.remove("escondido");
  
    cartasSelecionadas = [];
  }


