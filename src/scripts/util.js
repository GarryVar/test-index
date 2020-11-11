 export const navToggle = {
  toggleBtn: document.getElementById('toggler'),
  nav: document.getElementById('nav'),

  start: function() {
    this.toggleHandler();
  },


  onToggle: function(elem, elemClass) {
    elem.classList.contains(elemClass) ? elem.classList.remove(elemClass) : elem.classList.add(elemClass);
  },


  toggleHandler: function() {
    this.toggleBtn.addEventListener('click', () => {
      console.log(this);
      // Показывает и прячет навигацию
      this.onToggle(this.nav, 'nav--hidden');

      // Меняет иконку с бургера на крестик при нажатии
      for (let i = 0; i < this.toggleBtn.children.length; i++) {
        this.onToggle(this.toggleBtn.children[i], 'toggle__shape--hidden')
      }
    })
  }
};
