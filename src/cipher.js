const caesarCipher = (action, shift, input) => {
  if (action === 'decode') {
    return caesarCipher('encode', 26 - shift, input);
  }
  if(shift < 0) {
    return caesarCipher(action, 26 + shift, input);
  }

  let output = '';
  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    
    if (letter.match(/\w/)) {
      let code = input.charCodeAt(i);
    
      if (code >= 65 && code <= 90) {
        letter = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        letter = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    output += letter;
  }
  return output
}

module.exports = caesarCipher;