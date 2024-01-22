class Guesser {
	constructor(number, lives) {
		this.number = number;
		this.lives = lives;
	}
	guess(n) {
		if (this.lives <= 0) {
			throw new Error('');
		} else if (n === this.number) {
			return true
		} else {
			this.lives--
			return false
		}
	}
}

export let guesser = new Guesser(10, 2);
// console.log(guesser.guess(1));
// console.log(guesser.guess(2));
// console.log(guesser.guess(10));
// console.log(guesser.guess(5));
// console.log(guesser.guess(10));