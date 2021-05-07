const fs = require('fs');

const optionsValidator = ({ action, shift, input, output}) => {
  if(!shift || !action) {
    process.stderr.write('One of required parameters is not provided')
    process.exit(1);
  }

  if(action !== 'encode' && action !== 'decode') {
    process.stderr.write('There are only 2 available actions: encode / decode')
    process.exit(1)
  }

  if(!Number.isInteger(+shift)) {
    process.stderr.write('Shift value have to be integer')
    process.exit(1);
  }
  
  try {
    if(!input || !output) {
      return
    }
    if(!fs.existsSync(input) || !fs.existsSync(output)) {
      process.stderr.write('Something wrong with current files')
      process.exit(1);
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = optionsValidator