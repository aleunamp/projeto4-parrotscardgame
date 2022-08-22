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


