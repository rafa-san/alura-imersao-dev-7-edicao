const botao = document.querySelector('button');
const selectOrigem = document.getElementById('moeda-origem');
const selectDestino = document.getElementById('moeda-destino');
const retorno = document.querySelector('.retorno');
    
botao.addEventListener('click', converter);
selectOrigem.addEventListener("change", valorOrigem);
selectDestino.addEventListener('change', valorDestino);

// Função para pegar o número digitado
function converter() {
  const valor = Number(document.getElementById('valor').value);
  if (selectOrigem.value === 'real' && selectDestino.value === 'dolar') {
    const valorEmDolares = valor / 4.90;
    retorno.textContent = valorEmDolares.toFixed(2);
  } else if (selectOrigem.value === 'dolar' && selectDestino.value === 'real') {
    const valorEmReal = valor * 4.90;
    retorno.textContent = valorEmReal.toFixed(2);
  } else {
    retorno.textContent = 'Erro';
  }
}

// Função para identificar qual a opção escolhida no campo De
function valorOrigem() {
  const escolha = selectOrigem.value;
  return escolha;
}

// Função para identificar qual a opção escolhida no campo Para
function valorDestino() {
  const escolha = selectDestino.value;
  return escolha;
}


