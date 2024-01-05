import { createNode, getRandomNumber, htmlspecialchars, toCamelCase } from './functions.js';

const target = document.querySelector('.target')

createNode('h2', 'Tasks', target);
createNode('p', `1. htmlspecialchars: ${htmlspecialchars("<h2>Hello World</h2>")}`, target);
createNode('p', `2. toCamelCase: ${toCamelCase("The_Stealth-Warrior")}`, target);


function doubleChar(str) {
  let result = str.split('').map((ch) => {
    return ch + ch
  }).join('');
  return result
}

console.log(doubleChar("String"));
