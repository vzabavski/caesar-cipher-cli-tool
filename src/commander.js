const program = require('commander');
const fs = require('fs');
const { pipeline } = require('stream');
const transform = require('stream-transform');
const caesarCipher = require('./cipher')

program
    .option('-a --action <value>', 'string value', null)
    .option('-s --shift <value>', 'integer value', null)
    .option('-i --input <value>', 'string value')
    .option('-o --output <value>', 'string value')
    .parse();

const options = program.opts();

if(!options.shift || !options.action) {
    process.stderr.write('One of required parameters is not provided')
    process.exit(1);
}
const transformer = transform(function(data){
    const modified = caesarCipher(options.action, +options.shift, data.toString())
    return modified;
})
pipeline(
    fs.createReadStream(options.input),
    transformer,
    fs.createWriteStream(options.output),
    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
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



