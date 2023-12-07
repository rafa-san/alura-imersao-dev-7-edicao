let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);

const palpite = document.getElementById('inputPalpite');
const enviarPalpite = document.querySelector('.enviarPalpite');

const tentativas = document.querySelector('.tentativas');
const listaDePalpites = document.querySelector('.listaDePalpites');
const resultado = document.querySelector('.resultado');
const dica = document.querySelector('.dica');

let contagemPalpites = 0;
let botaoReinicio;

palpite.focus();
enviarPalpite.addEventListener('click', conferirPalpite);

function conferirPalpite() {
  const palpiteUsuario = Number(palpite.value);
  let diferenca;

  if (palpiteUsuario === numeroAleatorio) {
    resultado.textContent = `Acertou`;
  } else if (palpiteUsuario > numeroAleatorio) {
    diferenca = palpiteUsuario - numeroAleatorio;
    if (diferenca > 3) {
      resultado.textContent = `Errou!`;
      dica.textContent = `Seu palpite foi muito alto`;
    } else {
      resultado.textContent = `Errou!`;
      dica.textContent = `Seu palpite ficou um pouco acima do número correto!`;
    }
  } else if (palpiteUsuario < numeroAleatorio) {
    diferenca =  numeroAleatorio - palpiteUsuario;
    if (diferenca > 3) {
      resultado.textContent = `Errou!`;
      dica.textContent = `Seu palpite foi muito baixo`;
    } else {
      resultado.textContent = `Errou!`;
      dica.textContent = `Seu palpite ficou um pouco abaixo do número correto!`;
    }
  }

  contagemPalpites++;
  tentativas.textContent = `${contagemPalpites}`;
  console.log(contagemPalpites);
  palpite.value = '';
  palpite.focus();

}