const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
      this._changeIcon(drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      this._changeIcon(drawer, button);
    });

    drawer.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      this._changeIcon(drawer, button);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _changeIcon(drawer, button) {
    if (drawer.classList.contains('open')) {
      button.innerHTML = '&#x2715';
    } else {
      button.innerHTML = '☰';
    }
  },
};

export default DrawerInitiator;
