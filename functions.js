export const createNode = (node, text, target = document.body) => {
  const el = document.createElement(node);
  el.textContent = text;
  target.append(el);
}

export const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

export function htmlspecialchars(formData) {
  let result = formData.split('').map((i) => {
    switch (i) {
      case "<":
        return "&lt;";
        break;
      case ">":
        return "&gt;"
        break;
      case '"':
        return "&quot;"
        break;
      case "&":
        return "&amp;"
        break;
      default:
        return i;
        break;
    }
  }).join('');
  return result;
}

export function toCamelCase(str) {

  const re = /\-\D/g
  const re1 = /\_\D/g

  let str1 = str.replace(re, s => s[1].toUpperCase())
  return str1.replace(re1, s => s[1].toUpperCase())

}

export function remove(s, n) {
  let maxS = s.match(/!/g).length;
  let maxN = (n <= maxS) ? n : maxS;

  for (let i = 0; i < maxN; i++) {
    s = s.replace(/!/i, '');
  }
  return s;
}

export function generateHashtag(str) {
  str = str.trim();
  if (str.length === 0) return false;

  let strIn = str.split(' ');

  let result = strIn.map((i) => {
    if (i.length) {
      i = i[0].toUpperCase() + i.slice(1);
      return i
    }
  });
  result = '#' + result.join('')

  return (result.length > 140) ? false : result;
}

export function pipeFix(numbers) {
  let setNumbers = new Set(numbers)

  for (let i = numbers[0]; i < numbers[numbers.length - 1]; i++) {
    setNumbers.add(i)
  }
  let arrNumbers = [...setNumbers].sort((a, b) => a - b)

  return arrNumbers
}

export function validBraces(braces) {
  let opening = ['(', '[', '{']
  let closing = [')', ']', '}']
  let arr = []

  for (let i = 0; i < braces.length; i++) {
    if (opening.includes(braces[i])) {
      arr.push(braces[i])
    } else
      if (closing.indexOf(braces[i]) === opening.indexOf(arr[arr.length - 1])) {
        arr.pop()
      } else return false
  }
  return arr.length === 0;
}

export function toCsvText(array) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    let str = array[i].join(",")
    let res = (array[i] === array[array.length - 1]) ? str : str + "\n"
    result += res
  }
  return result;
}

// function firstNonRepeatingLetter(s) {
//   let arr = s.toLowerCase().split('');
//   let result = '';
//   let ctr = 0;

//   for (let i = 0; i < arr.length; i++) {
//     ctr = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         ctr += 1;
//       }
//     }

//     if (ctr < 2) {
//       result = s[i];
//       break;
//     }
//   }
//   return result;
// }
export function firstNonRepeatingLetter(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i], "gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

export function incrementString(strng) {
  return strng.replace(/[0-8]?9*$/, w => ++w)
}

export function calc(x) {
  let total = ''
  let total2 = ''
  let totalSum
  let totalSum2

  const toAmount = (str) => {
    return str.split('').reduce((sum, current) => +sum + +current)
  }

  for (let i = 0; i < x.length; i++) {
    let code = x.codePointAt(i)
    total += code
  }

  for (let i = 0; i < total.length; i++) {
    if (total[i] === '7') {
      total2 += 1
    } else {
      total2 += total[i]
    }
  }

  totalSum = toAmount(total)
  totalSum2 = toAmount(total2)

  let result = totalSum - totalSum2

  return result
}

export function sayHello(name, city, state) {

  let greeting = `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`

  return greeting
}

export function digitize(n) {
  return Array.from(String(n), Number).reverse()
}

export function countBy(x, n) {
  let z = [];
  let i = 1

  while (z.length < n) {
    if (i % x === 0) {
      z.push(i)
    }
    i++
  }
  return z;
}

export const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  }
  if (p1 === 'scissors') {
    if (p2 === 'paper') {
      return 'Player 1 won!'
    } else if (p2 === 'rock') {
      return 'Player 2 won!'
    }
  } else if (p1 === 'paper') {
    if (p2 === 'rock') {
      return 'Player 1 won!'
    } else if (p2 === 'scissors') {
      return 'Player 2 won!'
    }
  } else if (p1 === 'rock') {
    if (p2 === 'scissors') {
      return 'Player 1 won!'
    } else if (p2 === 'paper') {
      return 'Player 2 won!'
    }
  }
}

export function catchSignChange(arr) {
  let positiveSign = (arr[0] >= 0 || arr.length === 0) ? true : false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (positiveSign) {
      if (arr[i] < 0) {
        count += 1;
        positiveSign = !positiveSign
      }
    } else {
      if (arr[i] >= 0) {
        count++;
        positiveSign = !positiveSign
      }
    }
  }
  return count
}
//возвращаем плоский массив, представляющий значения треугольника Паскаля до n-го уровня
export function pascalsTriangle(n) {
  if (n === 0 || !n) return [];
  let arraysObject = {};
  for (let row = 0; row < n; row++) {
    arraysObject[row] = [];
    for (let col = 0; col < row + 1; col++) {
      if (col === 0 || col === row) {
        arraysObject[row][col] = 1;
      } else {
        arraysObject[row][col] = arraysObject[row - 1][col - 1] + arraysObject[row - 1][col];
      }
    }
  }
  let result = [];
  for (const key in arraysObject) {
    result.push(...arraysObject[key]);
  }
  return result;
}

export function doMath(string) {
  const arrayFromString = string.split(' ')
  const objectFromString = {}
  for (let i = 0; i < arrayFromString.length; i++) {
    let el = arrayFromString[i]
    let key;
    let value = '';
    for (let j = 0; j < el.length; j++) {
      if (!/[^a-z]/i.test(el[j])) {
        key = el[j]
      }
      if (/[^a-z]/i.test(el[j])) {
        value += el[j]
      }
    }
    if (key in objectFromString) {
      objectFromString[key + Object.keys(objectFromString).length] = +value
    } else {
      objectFromString[key] = +value
    }
  }
  let arrayFromObject = Object.entries(objectFromString).sort()
  arrayFromObject = Object.fromEntries(arrayFromObject)
  arrayFromObject = Object.values(arrayFromObject)
  let res = arrayFromObject.reduce(function (sum, curent, index) {
    switch (index) {
      case 1:
      case 5:
      case 9:
        return sum = sum + curent
        break;
      case 2:
      case 6:
      case 10:
        return sum = sum - curent
        break;
      case 3:
      case 7:
      case 11:
        return sum = sum * curent
        break;
      case 4:
      case 8:
      case 12:
        return sum = sum / curent
        break;
      default:
        break;
    }
    return sum
  });
  return (Math.round(res))
}

export function sortEmotions(arr, order) {
  let objectsArray = arr.map((el) => {
    switch (el) {
      case ':D':
        return order ? el = 0 + el : el = 4 + el
        break;
      case ':)':
        return order ? el = 1 + el : el = 3 + el
        break;
      case ':|':
        return order ? el = 2 + el : el = 2 + el
        break;
      case ':(':
        return order ? el = 3 + el : el = 1 + el
        break;
      case 'T_T':
        return order ? el = 4 + el : el = 0 + el
        break;
      default:
        break;
    }
  }).sort()
  for (let i = 0; i < objectsArray.length; i++) {
    objectsArray[i] = objectsArray[i].replace(/[0-9]/g, '');
  }
  return objectsArray
}