import {navToggle} from './util.js';
import {setGenre} from './genres.js';
import {newElement, renderElements} from './database.js';
import {loadScript} from './database.js';
import {array} from './callbacks.js';


// Скрипт показа и скрытия навигационного меню
navToggle.start();

const asyncScripts = () => {
  return [...document.querySelectorAll('script')].filter(script => script.attributes.type);
};

const sourceOfScripts = asyncScripts().map(scripts => scripts.attributes.src.value);
