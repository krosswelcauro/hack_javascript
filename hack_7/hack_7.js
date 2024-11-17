/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

const arrayModificado = arr.map(palabra => {
    const caracteres = palabra.split('');
    caracteres[0] = caracteres[0].toUpperCase();
    return result.push(caracteres.join(''));
  });

//export result
module.exports = result;