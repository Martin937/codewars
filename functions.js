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

export { createNode, getRandomNumber, htmlspecialchars, toCamelCase, remove, generateHashtag, pipeFix, validBraces, }