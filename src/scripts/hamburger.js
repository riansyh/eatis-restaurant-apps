const hamburgerButton = document.querySelector('#hamburgerButton');
const drawerElement = document.querySelector('#drawerElement');
const bodyElement = document.querySelector('body');

const changeIcon = (elem1, elem2) => {
  if (elem1.classList.contains('open')) {
    elem2.innerHTML = '&#x2715';
  } else {
    elem2.innerHTML = '☰';
  }
};

hamburgerButton.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
  changeIcon(drawerElement, hamburgerButton);
});

bodyElement.addEventListener('click', (event) => {
  if (drawerElement.classList.contains('open')) {
    drawerElement.classList.toggle('open');
    changeIcon(drawerElement, hamburgerButton);
    event.stopPropagation();
  }
});
