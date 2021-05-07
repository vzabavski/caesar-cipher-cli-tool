# Caesar cipher CLI tool


This tool implements Caesar cipher cryptography method.

## Tool accept 4 options (short alias and full name):
* -a, --action: an action encode/decode **(required)**
* -s, --shift: a shift **(required)**
* -i, --input: an input file
* -o, --output: an input file

## Example of usage
* Full name alias:

        --action encode --shift 3 --input test.txt --output result.txt
* Short alias:

        -a decode -s 6 -i test.txt -o result.txt

## Optional parameters
* If the ` --input ` parameter is missed you should use console as an input source.
* If the ` --output ` parameter is missed program will use console as an output destination.

## Features of tool
* For encoding/decoding tool uses only the English alphabet, all other characters are kept untouched.
* Tool handles the cases when values of shift (-s, --shift) are bigger than alphabet length.
* The tool works correctly with an integer values of shift (-s, --shift) that are lower than zero.


## Usage
1. Clone this repository on your computer
    
        git clone https://github.com/vzabavski/caesar-cipher-cli-tool.git
2. Open *caesar-cipher-cli-tool* directory on your computer
3. Run program in terminal
    * with provided test files

            node index.js --action *your-action* --shift *value-of-shift* -input **test.txt** --output **result.txt**
    * with your own files

            node index.js --action *your-action* --shift *value-of-shift* -input **your-file.txt** --output **your-file.txt**
    * with no files

            node index.js --action *your-action* --shift *value-of-shift*