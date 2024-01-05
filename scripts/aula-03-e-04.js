const botaoSalvarLista = document.getElementById('salvar-lista');
const retorno = document.querySelector('.retorno');

botaoSalvarLista.addEventListener('click', salvarLista);

function salvarLista() {
  retorno.innerHTML = '';

  // Armazenar os filmes selecionados e limpar a array a cada novo clique no botão
  const filmesSelecionados = [];

  // Criar vínculo com todas as checkboxes
  const checkboxes = document.getElementsByName('filme');

  // Iterar sobre as checkboxes para encontrar a opção selecionada
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      filmesSelecionados.push(checkboxes[i].value);
    }
  }
  
  // Encontrar a imagem correspondente ao filme
  for (let j = 0; j < filmesSelecionados.length; j++) {
    if (filmesSelecionados[j] === 'Cães de Aluguel (1992)') {
      const imagem = document.createElement('img');
      imagem.src = '../../imagens/01-caes-de-aluguel.jpg';
      retorno.appendChild(imagem);
    } 
    
    if (filmesSelecionados[j] === 'Pulp Fiction (1994)') {
      const imagem = document.createElement('img');
      imagem.src = '../../imagens/02-pulp-fiction.jpg';
      retorno.appendChild(imagem);
    }

    if (filmesSelecionados[j] === 'Jackie Brown (1997)') {
      const imagem = document.createElement('img');
      imagem.src = '../../imagens/03-jackie-brown.jpg';
      retorno.appendChild(imagem);
    }

    if (filmesSelecionados[j] === 'Kill Bill: Volume 1 (2003)') {
      const imagem = document.createElement('img');
      imagem.src = '../../imagens/04-kill-bill-1.jpg';
      retorno.appendChild(imagem);
    }

    if (filmesSelecionados[j] === 'Kill Bill: Volume 2 (2004)') {
      const imagem = document.createElement('img');
      imagem.src = '../../imagens/05-kill-bill-2.jpg';
      retorno.appendChild(imagem);
    }

    if (filmesSelecionados[j] === 'À Prova de Morte (2007)') {
      const imagem = document.createElement('img');
      imagem.src = '../../imagens/06-a-prova-de-morte.jpg';
      retorno.appendChild(imagem);
    }

    if (filmesSelecionados[j] === 'Bastardos Inglórios (2009)') {
      const imagem = document.createElement('img');
      imagem.src = '../../imagens/07-bastardos-inglorios.jpg';
      retorno.appendChild(imagem);
    }

    if (filmesSelecionados[j] === 'Django Livre (2012)') {
      const imagem = document.createElement('img');
      imagem.src = '../../imagens/08-django.jpg';
      retorno.appendChild(imagem);
    }

    if (filmesSelecionados[j] === 'Os Oito Odiados (2015)') {
      const imagem = document.createElement('img');
      imagem.src = '../../imagens/09-os-oito-odiados.jpg';
      retorno.appendChild(imagem);
    }

    if (filmesSelecionados[j] === 'Era uma Vez em... Hollywood (2019)') {
      const imagem = document.createElement('img');
      imagem.src = '../../imagens/10-era-uma-vez-em-hollywood.jpg';
      retorno.appendChild(imagem);
    }
  }
}


