import { createNode, getRandomNumber, htmlspecialchars, toCamelCase, remove } from './functions.js';

const target = document.querySelector('.target')

createNode('h2', 'Tasks', target);
createNode('p', `1. htmlspecialchars: ${htmlspecialchars("<h2>Hello World</h2>")}`, target);
createNode('p', `2. toCamelCase: ${toCamelCase("The_Stealth-Warrior")}`, target);
createNode('p', `2. remove !*n: ${remove("!!!Hi !!hi!!! !hi", 3)}`, target);





