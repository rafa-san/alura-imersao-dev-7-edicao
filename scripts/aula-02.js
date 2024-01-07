// Declaração das variáveis:
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);
const palpite = document.getElementById('inputPalpite');
const enviarPalpite = document.querySelector('.enviarPalpite');
const novoJogo = document.querySelector('.novoJogo');
const tentativas = document.querySelector('.tentativas');
const listaDePalpites = document.querySelector('.listaDePalpites');
const resultado = document.querySelector('.resultado');
const dicaMarota = document.querySelector('.dica-marota');
const avisos = document.querySelector('.avisos');
let contagemPalpites = 0;
let botaoReinicio;

// palpite.focus(); // Inicia com o cursor no campo do palpite
novoJogo.style.display = 'none';

enviarPalpite.addEventListener('click', conferirPalpite);

function conferirPalpite() {
  const palpiteUsuario = Number(palpite.value);
  let diferenca;

  listaDePalpites.textContent += `${palpiteUsuario} `;

  if (palpiteUsuario === numeroAleatorio) {
    resultado.innerHTML = `Parabéns!! Você acertou &#129321; &#127942;`;
    dicaMarota.style.display = 'none';
    enviarPalpite.style.display = 'none';
    fimDeJogo();
  } else if (contagemPalpites === 5) {
      resultado.innerHTML = `Fim de Jogo! Você não acertou &#128546;`;
      avisos.innerHTML = 'Tente novamente &#128541;';
      enviarPalpite.style.display = 'none';
      fimDeJogo();
  } else if (palpiteUsuario > numeroAleatorio) {
    diferenca = palpiteUsuario - numeroAleatorio;
    if (diferenca > 5) {
      resultado.innerHTML = `&#10060; Errou!`;
      avisos.textContent = `Seu palpite foi alto`;
    } else {
      resultado.innerHTML = `Errou! Mas chegou perto &#128293;`;
      avisos.textContent = `Seu último palpite ficou um pouco acima do número correto!`;
    }
  } else if (palpiteUsuario < numeroAleatorio) {
    diferenca =  numeroAleatorio - palpiteUsuario;
    if (diferenca > 5) {
      resultado.innerHTML = `&#10060; Errou!`;
      avisos.textContent = `Seu palpite foi baixo`;
    } else {
      resultado.innerHTML = `Errou! Mas chegou perto &#128293;`;
      avisos.textContent = `Seu último palpite ficou um pouco abaixo do número correto!`;
    }
  }

  contagemPalpites++;

  tentativas.textContent = `${contagemPalpites}`;
  palpite.value = '';
  palpite.focus();
}

function fimDeJogo() {
  palpite.disabled = true;
  enviarPalpite.disabled = true;
  novoJogo.style.display = 'block';
  
  novoJogo.addEventListener('click', reiniciarJogo);
  function reiniciarJogo() {
    contagemPalpites = 0;
    const reiniciarDados = document.querySelectorAll('.retorno span');
    for (let i = 0; i < reiniciarDados.length; i++) {
      reiniciarDados[i].textContent = '';
    }
    novoJogo.style.display = 'none';
    enviarPalpite.style.display = 'block';
    dicaMarota.style.display = 'block';
    palpite.disabled = false;
    enviarPalpite.disabled = false;
    palpite.value = '';
    palpite.focus();
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(numeroAleatorio);
  }
}