const botao = document.querySelector('button');
const selectOrigem = document.getElementById('moeda-origem');
const selectDestino = document.getElementById('moeda-destino');
const retorno = document.querySelector('.valor-retorno');
    
botao.addEventListener('click', converter);
selectOrigem.addEventListener("change", valorOrigem);
selectDestino.addEventListener('change', valorDestino);

// Função para pegar o número digitado
function converter() {
  const valor = Number(document.getElementById('valor').value);
  if (selectOrigem.value === 'real' && selectDestino.value === 'dolar') {
    const valorEmDolares = valor / 4.90;
    const valorFormatadoDolares = formatarValorDolar(valorEmDolares);
    retorno.textContent = `US${valorFormatadoDolares}`;
  } else if (selectOrigem.value === 'dolar' && selectDestino.value === 'real') {
    const valorEmReal = valor * 4.90;
    const valorFormatadoReais = formatarValorReal(valorEmReal);
    retorno.textContent = `${valorFormatadoReais}`;
  } else {
    retorno.innerHTML = 'Não é possível fazer essa conversão &#128530;';
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

function formatarValorDolar(v) {
  return v.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function formatarValorReal(v) {
  return v.toLocaleString('pt-BR', {style:'currency', currency:'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2});
}