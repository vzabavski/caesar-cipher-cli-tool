const program = require('commander');
const fs = require('fs');
const { pipeline } = require('stream');
const transform = require('stream-transform');
const caesarCipher = require('./cipher')
const optionsValidator = require('./validator')

program
  .option('-a --action <value>', 'string value', null)
  .option('-s --shift <value>', 'integer value', null)
  .option('-i --input <value>', 'string value')
  .option('-o --output <value>', 'string value')
  .parse();

const options = program.opts();

optionsValidator(options);

const transformer = transform(function(data){
  const modified = caesarCipher(options.action, +options.shift, data.toString())
  return modified;
})

const input = options.input 
const output = options.output
pipeline(
    fs.createReadStream(input),
    transformer,
    fs.createWriteStream(output, {flags: 'a'}),
    (err) => {
      if (!err) {
        console.log('Pipeline succeeded.');
      }
    }
  );
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
 
// readline.question('Type your text: ', text => {
//   console.log(`Hey there ${text}!`);
//   readline.close();
// });



