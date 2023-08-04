
// Definición de un objeto llamado analyzer
const analyzer = {

  getWordCount: (text) => {
    const words = text.trim().split(/\s+/);  // Elimina espacios al principio y al final del texto, y divide el texto en palabras
    const wCount = words.filter(word => isNaN(word)).length;// Filtra las palabras para excluir aquellas que son números
    return wCount; // Retorna el recuento de palabras en el texto
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCount: (text) => {
    const chatCount = text.length;
    return chatCount;

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const charCountNotSpace = text.replace(/[^a-z0-9]/gi,'').length;
    return charCountNotSpace;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },

  getAverageWordLength: (text) => {
   
    const textWithoutNumbers = text.replace(/\d+/g, ''); // Eliminar los numeros del texto
    const countCharacter = textWithoutNumbers.replace(/\s/g, '').length;// Contar la cantidad de caracteres sin espacios SOLO LETRAS
    const words = textWithoutNumbers.trim().split(/\s+/);   // Contar la cantidad de palabras sin números 
    const wordCount = words.length; 
    if (wordCount === 0) {
      return 0;
    }
    const averageLength = countCharacter / wordCount; // Calcular promedio de palabras
    return parseFloat(averageLength.toFixed(2)); //parseFloat es para asegurar un resultado numero y toFixed para que solo sea 2 decimales
  },
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

  getNumberCount: (text) => {
    const textSplit = text.split(' ')   // Se divide el texto en palabras utilizando el espacio como separador y se almacena en "textSplit".
    let contador =0; // Se inicializa un contador en 0 para llevar la cuenta de los números encontrados en el texto.
    for (let i =0; i<textSplit.length; i++){ // Se recorre el array de palabras.
      if (Number(textSplit[i])){   // Si la palabra actual se puede convertir a un número, se aumenta el contador en 1.
        contador ++;
      }
    }
    return contador;  // Se devuelve la cantidad total de números
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const textSplit = text.split(' ') // Se divide el texto en palabras utilizando el espacio como separador y se almacena en "textSplit".
    let contador = 0; // Se inicializa un contador en 0 para llevar la cuenta de los números encontrados en el texto.
    for (let i =0; i <textSplit.length; i++){ // Se recorre el array de palabras.
      if (Number(textSplit[i])) { // Si la palabra actual se puede convertir a un número, se suma al contador.
        contador = contador + Number(textSplit[i])
      }
    }
    return contador;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

