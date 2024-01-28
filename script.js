
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
func.createNode('p', `14. countBy: ${func.countBy(2, 5)}`, target);
func.createNode('p', `15. rps: ${func.rps('rock', 'scissors')}`, target);
func.createNode('p', `16. catchSignChange: ${func.catchSignChange([1, -3, -4, 0, 5])}`, target);
func.createNode('p', `17. pascalsTriangle: ${func.pascalsTriangle(4)}`, target);
func.createNode('p', `18. doMath: ${func.doMath("111a 222c 444y 777u 999a 888p")}`, target);
func.createNode('p', `19. sortEmotions: ${func.sortEmotions([':D', 'T_T', ':D', ':('], true)}`, target);

