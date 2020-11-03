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
    this.toggleBtn.addEventListener('click', evt => {
      this.onToggle(this.nav, 'nav--hidden');
      for (let i = 0; i < this.toggleBtn.children.length; i++) {
        this.onToggle(this.toggleBtn.children[i], 'toggle__shape--hidden')
      }
    })
  }
};



class Character {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
};
const john = new Character('John', 'OKm4ntioc0F8K');

john.foo = () => this.name + this.id;


for(let key in john) {
  console.log(key.split('.'));
}
