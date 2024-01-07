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

export { createNode, getRandomNumber, htmlspecialchars, toCamelCase, remove, generateHashtag }