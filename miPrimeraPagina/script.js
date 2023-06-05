let menu = document.getElementById('menu');
let toogle_open = document.getElementById('toogle_open');
let toogle_close = document.getElementById('toogle_close');

toogle_open.addEventListener('click', toogleMenu);
toogle_close.addEventListener('click', toogleMenu);

function toogleMenu() {
  menu.classList.toggle('show-menu');

  if(menu.classList.contains('show-menu')) {
    toogle_open.style.display = 'none';
    toogle_close.style.display = 'block';
  }
  else {
    toogle_open.style.display = 'block';
    toogle_close.style.display = 'none';
  }
}