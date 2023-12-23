const viewResulter = document.querySelector('.resultFunction');
console.log(viewResulter);

const spinWords = (string) => {

  let newText = string.split(' ').map(str => {
    if (str.length >= 5) {
      return str.split('').reverse().join('');
    }
    return str
  })

  let result = newText.join(" ")
  return result
}

const createResult = (str) => {
  const h = document.createElement('h2');
  h.textContent = str
  console.log(h)
  document.body.append(h);
}

const string1 = spinWords("Hey fellow warriors")

createResult(string1)


// spinWords("Hey fellow warriors")
// spinWords("This is a test")
// spinWords("This is another test")