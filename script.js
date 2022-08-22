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


