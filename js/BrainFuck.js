/**

Inspired from real-world Brainf**k, we want to create an interpreter of that language which will support the following instructions (the machine memory or 'data' should behave like a potentially infinite array of bytes, initialized to 0):

    • > increment the data pointer (to point to the next cell to the right).
    • < decrement the data pointer (to point to the next cell to the left).
    • + increment (increase by one, truncate overflow: 255 + 1 = 0) the byte at the data pointer.
    • - decrement (decrease by one, treat as unsigned byte: 0 - 1 = 255 ) the byte at the data pointer.
    • . output the byte at the data pointer.
    • , accept one byte of input, storing its value in the byte at the data pointer.
    • [ if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.
    • ] if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.
    
The function will take in input...

    • the program code, a string with the sequence of machine instructions,
    • the program input, a string, eventually empty, that will be interpreted as an array of bytes using each character's ASCII code and will be consumed by the , instruction

... and will return ...

    • the output of the interpreted code (always as a string), produced by the . instruction.
*/

function brainFuck(code, input = ""){
  let tape = [0];
  let pointer = 0;
  let out = '';
  
  let stream = [...input].map(c => c.charCodeAt());
    
  for(let i = 0; i < code.length; i++) {
    let c = code[i];
    
    switch(c) {
      case '+': tape[pointer] = (tape[pointer] + 1) % 256; break;
      case '-': tape[pointer] = tape[pointer] === 0 ? 255 : tape[pointer] - 1; break;
      case ',': tape[pointer] = stream.shift() || 0; break;
      case '.': out += String.fromCharCode(tape[pointer]); break;
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
        if(tape[pointer] === 0){
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
        if(tape[pointer] !== 0){
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
  
  return out;
}

brainFuck(',+[-.,+]','Codewars' + String.fromCharCode(255));             // 'Codewars'
brainFuck(',[.[-],]','Codewars'+String.fromCharCode(0));                 // 'Codewars'
brainFuck(',>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.', String.fromCharCode(8,9)) // String.fromCharCode(72)
brainFuck(',>+>>>>++++++++++++++++++++++++++++++++++++++++++++>++++++++++++++++++++++++++++++++<<<<<<[>[>>>>>>+>+<<<<<<<-]>>>>>>>[<<<<<<<+>>>>>>>-]<[>++++++++++[-<-[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<[>>>+<<<-]>>[-]]<<]>>>[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<+>>[-]]<<<<<<<]>>>>>[++++++++++++++++++++++++++++++++++++++++++++++++.[-]]++++++++++<[->-<]>++++++++++++++++++++++++++++++++++++++++++++++++.[-]<<<<<<<<<<<<[>>>+>+<<<<-]>>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+>-]>[<+>-]<<<-]', String.fromCharCode(10)) // "1, 1, 2, 3, 5, 8, 13, 21, 34, 55"