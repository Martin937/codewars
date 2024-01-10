import { createNode, getRandomNumber, htmlspecialchars, toCamelCase, remove, generateHashtag, pipeFix, validBraces, toCsvText, firstNonRepeatingLetter, incrementString, calc, } from './functions.js';

const target = document.querySelector('.target')

createNode('h2', 'Tasks', target);
createNode('p', `1. htmlspecialchars: ${htmlspecialchars("<h2>Hello World</h2>")}`, target);
createNode('p', `2. toCamelCase: ${toCamelCase("The_Stealth-Warrior")}`, target);
createNode('p', `3. remove !*n: ${remove("!!!Hi !!hi!!! !hi", 3)}`, target);
createNode('p', `4. generateHashtag: ${generateHashtag(" Hello there thanks for trying my Kata")}`, target);
createNode('p', `5. pipeFix: ${pipeFix([6, 9, 15])}`, target);
createNode('p', `6. validBraces: ${validBraces("(){}[]")}`, target);
createNode('p', `7. toCsvText: ${toCsvText([[-25, 21, 2, -33, 48],
[30, 31, -32, 33, -34]])}`, target);
createNode('p', `8. firstNonRepeatingLetter: ${firstNonRepeatingLetter('stress')}`, target);
createNode('p', `9. incrementString: ${incrementString("fo99obar99")}`, target);
createNode('p', `10. calc: ${calc('abcdef')}`, target);






console.log(calc('abcdef'));