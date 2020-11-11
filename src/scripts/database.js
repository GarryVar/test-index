export {newElement, renderElements};
export{loadScript};

const  renderElements = (parent, element) => parent.appendChild(element);
const newElement = elem => document.createElement(elem);

const loadScript = function(src, callback) {
  let script = document.createElement('script');
  script.type = 'module';
  script.src = src;
  script.onload = () => callback(script);
  document.body.appendChild(script);
};

