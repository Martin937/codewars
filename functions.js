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

export { createNode, getRandomNumber, htmlspecialchars, toCamelCase }