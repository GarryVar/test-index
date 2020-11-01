 export const navToggle = {
  toggleBtn: document.getElementById('toggler'),
  nav: document.getElementById('nav'),

  start: function() {
    this.navToggleHandler();
  },

  onNavToggle: function(elem, elemClass) {
    elem.classList.contains(elemClass) ? elem.classList.remove(elemClass) : elem.classList.add(elemClass);
  },

  navToggleHandler: function() {
    this.toggleBtn.addEventListener('click', () => {
      this.onNavToggle(this.nav, 'nav--hidden');
    })
  }
};

