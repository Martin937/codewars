import { createNode, getRandomNumber, htmlspecialchars, toCamelCase, remove, generateHashtag, pipeFix, } from './functions.js';

const target = document.querySelector('.target')

createNode('h2', 'Tasks', target);
createNode('p', `1. htmlspecialchars: ${htmlspecialchars("<h2>Hello World</h2>")}`, target);
createNode('p', `2. toCamelCase: ${toCamelCase("The_Stealth-Warrior")}`, target);
createNode('p', `3. remove !*n: ${remove("!!!Hi !!hi!!! !hi", 3)}`, target);
createNode('p', `4. generateHashtag: ${generateHashtag(" Hello there thanks for trying my Kata")}`, target);
createNode('p', `5. pipeFix: ${pipeFix([6, 9, 15])}`, target);




