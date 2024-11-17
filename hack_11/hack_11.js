/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

let modifiedNumbers = numberArray.map(num => {
    if (num === 1) return "one";
    if (num === 3) return "three";
    if (num === 5) return "five";
    return num; 
});

let modifiedStrings = stringArray.map(str => {
    if (str === "foo") return "f00";
    if (str === "bar") return "Bar";
    if (str === "baz") return "b@z";
    if (str === "qux") return "quX";
    if (str === "echo") return "3ch0";
});

result.push("h@ck");
result = result.concat(modifiedNumbers);
result.push("h@ck");
result = result.concat(modifiedStrings);
result.push("h@ck");

//export result
module.exports = result;