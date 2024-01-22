
import * as func from './functions.js';
import * as classes from './classes.js';

const target = document.querySelector('.target')

func.createNode('h2', 'Tasks', target);
func.createNode('p', `1. htmlspecialchars: ${func.htmlspecialchars("<h2>Hello World</h2>")}`, target);
func.createNode('p', `2. toCamelCase: ${func.toCamelCase("The_Stealth-Warrior")}`, target);
func.createNode('p', `3. remove !*n: ${func.remove("!!!Hi !!hi!!! !hi", 3)}`, target);
func.createNode('p', `4. generateHashtag: ${func.generateHashtag(" Hello there thanks for trying my Kata")}`, target);
func.createNode('p', `5. pipeFix: ${func.pipeFix([6, 9, 15])}`, target);
func.createNode('p', `6. validBraces: ${func.validBraces("(){}[]")}`, target);
func.createNode('p', `7. toCsvText: ${func.toCsvText([[-25, 21, 2, -33, 48], [30, 31, -32, 33, -34]])}`, target);
func.createNode('p', `8. firstNonRepeatingLetter: ${func.firstNonRepeatingLetter('stress')}`, target);
func.createNode('p', `9. incrementString: ${func.incrementString("fo99obar99")}`, target);
func.createNode('p', `10. calc: ${func.calc('abcdef')}`, target);
func.createNode('p', `11. sayHello: ${func.sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois')}`, target);
func.createNode('p', `12. digitize: ${func.digitize(35231)}`, target);
func.createNode('p', `13. guesser: ${classes.guesser.guess(1)}`, target);






console.log();
