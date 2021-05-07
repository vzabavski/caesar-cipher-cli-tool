const program = require('commander');
const { pipeline } = require('stream');
const optionsValidator = require('./validator');
const { inputHandler, transformHandler, outputHandler } = require('./handlers');

program
  .option('-a --action <value>', 'string value', null)
  .option('-s --shift <value>', 'integer value', null)
  .option('-i --input <value>', 'string value')
  .option('-o --output <value>', 'string value')
  .parse();

const options = program.opts();

optionsValidator(options);

pipeline(
    inputHandler(options.input),
    transformHandler(options.action, options.shift),
    outputHandler(options.output),
    (err) => {
      if (!err) {
        console.log('Pipeline succeeded.');
      }
    }
  );

