// Function that reverses the string
function reverseString(string) {
    return string.split('').reverse().join('');
}


function convertToASCII(string) {
    return string.split('').map(char => char.charCodeAt(0)).join(' ');
}


function transformString(string) {
    const lengthString = string.length;

   
    if (lengthString % 3 === 0 && lengthString % 5 === 0) {
       
        string = reverseString(string);
        string = convertToASCII(string);
    } else if (lengthString % 3 === 0) {
        
        string = reverseString(string);
    } else if (lengthString % 5 === 0) {
       
        string = convertToASCII(string);
    }

    
    return string;
}

const input = "Hello World";
const output = transformString(input);

console.log(output);