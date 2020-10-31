 export const navToggle = {
  toggleBtn: document.getElementById('toggler'),
  nav: document.getElementById('nav'),

  start: function() {
    this.navToggleHandler();
  },

  onNavToggle: function(elemClass) {
    this.nav.classList.contains(elemClass) ? this.nav.classList.remove(elemClass) : this.nav.classList.add(elemClass);
  },

  navToggleHandler: function() {
    this.toggleBtn.addEventListener('click', () => {
      this.onNavToggle('nav--hidden');
    })
  }
};

