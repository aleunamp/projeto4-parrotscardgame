
//Quantidade de cartas
let numCartas;

    while (numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0){
        numCartas = Number(prompt("Deseja jogar com quantas cartas?"));
    }

//Iniciar jogo
let jogo = [];
let contador = 0;

while(jogo.length < numCartas){
    jogo.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
    jogo.push(
        `<div class="carta"><img src="imagens/front.png"/></div>`,
    );
    contador += 1;}

jogo.sort(comparador);

console.log(jogo);

function comparador() { 
	return Math.random() - 0.5; 
}

//Baralho na tela

for (let contador = 0; jogo.length > contador; contador++){
    const baralho = document.querySelector('.distribuicao-de-cartas');
    baralho.innerHTML += jogo[contador];
}


