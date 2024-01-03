import { createNode, getRandomNumber, htmlspecialchars } from './functions.js';

const target = document.querySelector('.target')

createNode('a', 'module', target);

console.log(htmlspecialchars("<h2>Hello World</h2>"));
