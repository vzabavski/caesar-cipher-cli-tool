const fs = require('fs');
const caesarCipher = require('./cipher');
const { Writable, Transform } = require('stream');

const inputHandler = (input) => {
  if(!input) {
    return process.stdin.on('data', (chunk) => {
      return chunk
    });
  }
  return fs.createReadStream(input, 'utf-8');
};

const transformHandler = (action, shift) => {
  const stream = new Transform();
  stream._transform = (chunk, encoding, callback) => {
    const modified = caesarCipher(action, +shift, chunk.toString());
    callback(null, modified);
  }
  return stream;
}

const outputHandler = (output) => {
  if(!output) {
    const stream = new Writable();
    stream._write = function(chunk, encoding, next) {
      process.stdout.write(chunk);
      next();
    }
    return stream;
  }
  return fs.createWriteStream(output, {flags: 'a'}, 'utf-8')
}

module.exports = { inputHandler, transformHandler, outputHandler }