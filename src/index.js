const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
  let result = (expr.match(/(.{10}|.)/g))

  for (let i = 0; i< result.length; i++) {
    if( result[i] === '**********') {
      result[i] = ' ';
      continue
    }
    result[i] = result[i].slice(result[i].indexOf('1'), );

    while (result[i].indexOf('10') !== -1 || result[i].indexOf('11') !== -1) {
   
      result[i] = result[i].replace('10', '.');
      result[i] = result[i].replace('11', '-');

    }

    result[i] = MORSE_TABLE[result[i]];
  }

  return result.join('')
}

module.exports = {
    decode
}