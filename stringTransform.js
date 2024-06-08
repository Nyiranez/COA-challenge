function transformString(str) {
    let transformedStr = str.split('');
    let strLen = str.length;
    let divisibleBy3 = (strLen % 3) === 0;
    let divisibleBy5 = (strLen % 5) === 0;

    if (!divisibleBy3 && !divisibleBy5) {
        return str;
    }

    for (let i = 0; i < str.length; i++) {
        // Divisible by 3 - reverse the entire string
        if (divisibleBy3) {
            transformedStr[i] = str.charAt(strLen - (1 + i));
        }
        // Divisible by 5 - replace each character with its ASCII code
        if (divisibleBy5) {
            transformedStr[i] = transformedStr[i].charCodeAt(0);
        }
    }

    return transformedStr.join(" ");
}
let strInput = "Hello     World";
console.log(transformString(strInput))