const createNode = (node, text, target = document.body) => {
  const el = document.createElement(node);
  el.textContent = text;
  target.append(el);
}

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

function htmlspecialchars(formData) {
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

function toCamelCase(str) {

  const re = /\-\D/g
  const re1 = /\_\D/g

  let str1 = str.replace(re, s => s[1].toUpperCase())
  return str1.replace(re1, s => s[1].toUpperCase())

}

function remove(s, n) {
  let maxS = s.match(/!/g).length;
  let maxN = (n <= maxS) ? n : maxS;

  for (let i = 0; i < maxN; i++) {
    s = s.replace(/!/i, '');
  }
  return s;
}

function generateHashtag(str) {
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

function pipeFix(numbers) {
  let setNumbers = new Set(numbers)

  for (let i = numbers[0]; i < numbers[numbers.length - 1]; i++) {
    setNumbers.add(i)
  }
  let arrNumbers = [...setNumbers].sort((a, b) => a - b)

  return arrNumbers
}

function validBraces(braces) {
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

function toCsvText(array) {
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
function firstNonRepeatingLetter(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i], "gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

export { createNode, getRandomNumber, htmlspecialchars, toCamelCase, remove, generateHashtag, pipeFix, validBraces, toCsvText, firstNonRepeatingLetter, }