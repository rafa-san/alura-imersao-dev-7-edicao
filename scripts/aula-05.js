const times = [
  {
    nome: 'Goiás',
    pontos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    totalDeGols: 0
  },
  {
    nome: 'Santos',
    pontos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    totalDeGols: 0
  },
  {
    nome: 'Vasco',
    pontos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    totalDeGols: 0
  },
  {
    nome: 'Sport',
    pontos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    totalDeGols: 0
  },
  {
    nome: 'Grêmio',
    pontos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    totalDeGols: 0
  },
  {
    nome: 'Bahia',
    pontos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    totalDeGols: 0
  }
];

const botaoSalvarResultados = document.getElementById('salvar-resultados');
const botaoAtualizarClassificacao = document.getElementById('atualizar-classificacao');

atualizarTabela();

botaoSalvarResultados.addEventListener('click', resultados);
botaoAtualizarClassificacao.addEventListener('click', classificacao);

function resultados() {
  const golsTime1 = Number(document.getElementById('time-1').value);
  const golsTime2 = Number(document.getElementById('time-2').value);
  const golsTime3 = Number(document.getElementById('time-3').value);
  const golsTime4 = Number(document.getElementById('time-4').value);
  const golsTime5 = Number(document.getElementById('time-5').value);
  const golsTime6 = Number(document.getElementById('time-6').value);

  times[0].pontos = 0;
  times[1].pontos = 0;
  times[2].pontos = 0;
  times[3].pontos = 0;
  times[4].pontos = 0;
  times[5].pontos = 0;
  times[0].vitorias = 0;
  times[1].vitorias = 0;
  times[2].vitorias = 0;
  times[3].vitorias = 0;
  times[4].vitorias = 0;
  times[5].vitorias = 0;
  times[0].empates = 0;
  times[1].empates = 0;
  times[2].empates = 0;
  times[3].empates = 0;
  times[4].empates = 0;
  times[5].empates = 0;
  times[0].derrotas = 0;
  times[1].derrotas = 0;
  times[2].derrotas = 0;
  times[3].derrotas = 0;
  times[4].derrotas = 0;
  times[5].derrotas = 0;

  if (golsTime1 > golsTime2) {
    times[0].pontos = 3;
    times[0].vitorias = 1;
    times[1].derrotas = 1;
  } else if (golsTime2 > golsTime1) {
    times[1].pontos = 3;
    times[1].vitorias = 1;
    times[0].derrotas = 1;
  } else {
    times[0].pontos = 1;
    times[1].pontos = 1;
    times[0].empates = 1;
    times[1].empates = 1;
  }
  
  if (golsTime3 > golsTime4) {
    times[2].pontos = 3;
    times[2].vitorias = 1;
    times[3].derrotas = 1;
  } else if (golsTime4 > golsTime3) {
    times[3].pontos = 3;
    times[3].vitorias = 1;
    times[2].derrotas = 1;
  } else {
    times[2].pontos = 1;
    times[3].pontos = 1;
    times[2].empates = 1;
    times[3].empates = 1;
  }

  if (golsTime5 > golsTime6) {
    times[4].pontos = 3;
    times[4].vitorias = 1;
    times[5].derrotas = 1;
  } else if (golsTime6 > golsTime5) {
    times[5].pontos = 3;
    times[5].vitorias = 1;
    times[4].derrotas = 1;
  } else {
    times[4].pontos = 1;
    times[5].pontos = 1;
    times[4].empates = 1;
    times[5].empates = 1;
  }

  // Atualizar total de gols
  times[0].totalDeGols = golsTime1;
  times[1].totalDeGols = golsTime2;
  times[2].totalDeGols = golsTime3;
  times[3].totalDeGols = golsTime4;
  times[4].totalDeGols = golsTime5;
  times[5].totalDeGols = golsTime6;

  // Atualizar a tabela
  atualizarTabela();
}

function atualizarTabela() {
  const tabela = document.getElementById('tabela-dos-times');
  tabela.innerHTML = `
    <tr>
      <td>${times[0].nome}</td>
      <td>${times[0].pontos}</td>
      <td>${times[0].vitorias}</td>
      <td>${times[0].empates}</td>
      <td>${times[0].derrotas}</td>
      <td>${times[0].totalDeGols}</td>
    </tr>
    <tr>
      <td>${times[1].nome}</td>
      <td>${times[1].pontos}</td>
      <td>${times[1].vitorias}</td>
      <td>${times[1].empates}</td>
      <td>${times[1].derrotas}</td>
      <td>${times[1].totalDeGols}</td>
    </tr>
    <tr>
      <td>${times[2].nome}</td>
      <td>${times[2].pontos}</td>
      <td>${times[2].vitorias}</td>
      <td>${times[2].empates}</td>
      <td>${times[2].derrotas}</td>
      <td>${times[2].totalDeGols}</td>
    </tr>
    <tr>
      <td>${times[3].nome}</td>
      <td>${times[3].pontos}</td>
      <td>${times[3].vitorias}</td>
      <td>${times[3].empates}</td>
      <td>${times[3].derrotas}</td>
      <td>${times[3].totalDeGols}</td>
    </tr>
    <tr>
    <td>${times[4].nome}</td>
    <td>${times[4].pontos}</td>
    <td>${times[4].vitorias}</td>
    <td>${times[4].empates}</td>
    <td>${times[4].derrotas}</td>
    <td>${times[4].totalDeGols}</td>
  </tr>
  <tr>
  <td>${times[5].nome}</td>
  <td>${times[5].pontos}</td>
  <td>${times[5].vitorias}</td>
  <td>${times[5].empates}</td>
  <td>${times[5].derrotas}</td>
  <td>${times[5].totalDeGols}</td>
</tr>
  `;
}


function classificacao() {
  const tabela = document.getElementById('tabela-dos-times');
  tabela.innerHTML = '';
  // // Ordenar times por pontos em ordem decrescente
  // const timesOrdenados = [...times].sort((a, b) => b.pontos - a.pontos);


  // Ordenar times por pontos em ordem decrescente
  const timesOrdenados = [...times].sort((a, b) => {
    if (a.pontos !== b.pontos) {
      return b.pontos - a.pontos;
    } else {
      // Se os pontos são iguais, usar o critério de desempate "Total de Gols"
      return b.totalDeGols - a.totalDeGols;
    }
  });





  for (const time of timesOrdenados) {
    tabela.innerHTML += `
      <tr>
        <td>${time.nome}</td>
        <td>${time.pontos}</td>
        <td>${time.vitorias}</td>
        <td>${time.empates}</td>
        <td>${time.derrotas}</td>
        <td>${time.totalDeGols}</td>
      </tr>
    `;
  }
}