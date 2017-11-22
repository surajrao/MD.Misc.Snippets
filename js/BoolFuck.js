/**

Boolfuck is an esoteric programming language (Esolang) based on the famous Brainfuck (also an Esolang) which was invented in 2004 or 2005 according to the official website. It is very similar to Brainfuck except for a few key differences:

    • Boolfuck works with bits as opposed to bytes
    • The tape for Brainfuck contains exactly 30,000 cells with the pointer starting from the very left; Boolfuck contains an infinitely long tape with the pointer starting at the "middle" (since the tape can be extended indefinitely either direction)
    • Each cell in Boolfuck can only contain the values 0 or 1 (i.e. bits not bytes) as opposed to Brainfuck which has cells containing values ranging from 0 to 255 inclusive.
    • The output command in Boolfuck is ; NOT .
    • The - command does not exist in Boolfuck since either + or - would flip a bit anyway
    
Commands and their descriptions:
   
    • + Flips the value of the bit under the pointer
    • , Reads a bit from the input stream, storing it under the pointer. The end-user types information using characters, though. Bytes are read in little-endian order—the first bit read from the character a, for instance, is 1, followed by 0, 0, 0, 0, 1, 1, and finally 0. If the end-of-file has been reached, outputs a zero to the bit under the pointer.
    • ; Outputs the bit under the pointer to the output stream. The bits get output in little-endian order, the same order in which they would be input. If the total number of bits output is not a multiple of eight at the end of the program, the last character of output gets padded with zeros on the more significant end.
    • < Moves the pointer left by 1 bit
    • > Moves the pointer right by 1 bit
    • [ If the value under the pointer is 0 then skip to the corresponding ]
    • ] Jumps back to the matching [ character

The function will take in input...

    • the program code, a string with the sequence of machine instructions,
    • the program input, a string, eventually empty, that will be interpreted as an array of bytes using each character's ASCII code and will be consumed by the , instruction

... and will return ...

    • the output of the interpreted code (always as a string), produced by the . instruction.
*/

function boolfuck(code, input = "") {
  let tape = [0];
  let pointer = 0;
  let out = '';
  
  let stream = [...[...input].map(c => {
    c = [...c.charCodeAt().toString(2)]  // Binary string from character
      .reverse()
      .join('');
    return c + '0'.repeat(8 - c.length); // Padded binary string
  }).join('')];
  
  code = [...code.replace(/[^+,;<>[\]]/g,'')]; // Sanitize code
  
  for(let i = 0; i < code.length; i++) {
    let c = code[i];
    switch(c) {
      case '+': tape[pointer] ^= 1; break;
      case ',': tape[pointer] = +stream.shift() || 0; break;
      case ';': out += tape[pointer]; break;
      case '<':
        pointer--;
        if (pointer < 0) { // Expand the tape
          pointer = 0;
          tape.unshift(0);
        }      
      break;
      case '>':
        pointer++;
        if (pointer >= tape.length) { // Expand the tape
          tape.push(0);
        }      
      break;
      case '[':
        if(!tape[pointer]){
          let depth = 0;
          for(let j = i + 1; j < code.length; j++){
            if(code[j] === '[') {
              depth++;
            } else if(code[j] === ']') {
              if(depth === 0) {
                i = j;
                break;
              }
              depth--;
            }
          }
        }
      break;
      case ']':
        if(tape[pointer]){
          let depth = 0;
          for(let j = i - 1; j > 0; j--){
            if(code[j] === ']') {
              depth++;
            } if(code[j] === '[') {
              if(depth === 0) {
                i = j;
                break;
              }
              depth--;
            }
          }
        }
      break;    
    }
  }
  
  return out
    .match(/[01]{0,8}/g)                         // Split into blocks of 8 bits.
    .map(c => c 
      ? String.fromCharCode(                     // Get the char code from the byte.
          parseInt([...c].reverse().join(''), 2) // reverse and pad the bits.
        )
      : '')                                      // Ignore empty blocks.
    .join('');                                   // Join the characters into an string.
}

boolfuck(`;;;+;+;;+;+;
+;+;+;+;;+;;+;
;;+;;+;+;;+;
;;+;;+;+;;+;
+;;;;+;+;;+;
;;+;;+;+;+;;
;;;;;+;+;;
+;;;+;+;;;+;
+;;;;+;+;;+;
;+;+;;+;;;+;
;;+;;+;+;;+;
;;+;+;;+;;+;
+;+;;;;+;+;;
;+;+;+;`), // "Hello, world!\n"

boolfuck(">,>,>,>,>,>,>,>,<<<<<<<[>]+<[+<]>>>>>>>>>[+]+<<<<<<<<+[>+]<[<]>>>>>>>>>[+<<<<<<<<[>]+<[+<]>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+]<<<<<<<<;>;>;>;>;>;>;>;<<<<<<<,>,>,>,>,>,>,>,<<<<<<<[>]+<[+<]>>>>>>>>>[+]+<<<<<<<<+[>+]<[<]>>>>>>>>>]<[+<]", "Codewars" + String.fromCharCode(255))              // "Codewars"
boolfuck(">,>,>,>,>,>,>,>,>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+<<<<<<<<[>]+<[+<]>;>;>;>;>;>;>;>;>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+<<<<<<<<[>]+<[+<]>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+]+<<<<<<<<+[>+]<[<]>>>>>>>>>]<[+<]>,>,>,>,>,>,>,>,>+<<<<<<<<+[>+]<[<]>>>>>>>>>]<[+<]", "Codewars" + String.fromCharCode(0))   // "Codewars"
boolfuck(">,>,>,>,>,>,>,>,>>,>,>,>,>,>,>,>,<<<<<<<<+<<<<<<<<+[>+]<[<]>>>>>>>>>[+<<<<<<<<[>]+<[+<]>>>>>>>>>>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+<<<<<<<<[>]+<[+<]>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+]>[>]+<[+<]>>>>>>>>>[+]>[>]+<[+<]>>>>>>>>>[+]<<<<<<<<<<<<<<<<<<+<<<<<<<<+[>+]<[<]>>>>>>>>>]<[+<]>>>>>>>>>>>>>>>>>>>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+<<<<<<<<[>]+<[+<]>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+]<<<<<<<<<<<<<<<<<<<<<<<<<<[>]+<[+<]>>>>>>>>>[+]>>>>>>>>>>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>]<[+<]<<<<<<<<<<<<<<<<<<+<<<<<<<<+[>+]<[<]>>>>>>>>>[+]+<<<<<<<<+[>+]<[<]>>>>>>>>>]<[+<]>>>>>>>>>>>>>>>>>>>;>;>;>;>;>;>;>;<<<<<<<<", String.fromCharCode(8, 9)), String.fromCharCode(72)