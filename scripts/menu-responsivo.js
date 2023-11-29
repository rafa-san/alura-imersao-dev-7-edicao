const iconeMenu = document.getElementById('icone-menu');

iconeMenu.addEventListener('click', menu);

function menu() {
  const menuResponsivo = document.getElementById('menu-responsivo');

  if (menuResponsivo.className === 'menu-normal') {
    iconeMenu.innerHTML = '&#10799;';
    iconeMenu.title = 'Fechar Menu';
    menuResponsivo.className = ' m-responsivo';
  } else {
    menuResponsivo.className = 'menu-normal';
    iconeMenu.innerHTML = '&#9776;';
    iconeMenu.title = 'Abrir Menu';
  }
}