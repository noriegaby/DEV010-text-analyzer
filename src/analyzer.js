
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
    const countCharacter = textWithoutNumbers.replace(/\s/g, '').length;// Contar la cantidad de caracteres sin espacios 
    const words = textWithoutNumbers.trim().split(/\s+/);   // Contar la cantidad de palabras sin números
    const wordCount = words.length;
    if (wordCount === 0) {
      return 0;
    }
    const averageLength = countCharacter / wordCount; // Calcular promedio de palabras
    return parseFloat(averageLength.toFixed(2));
  },
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

  getNumberCount: (text) => {
    const textSplit = text.split(' ')
    let contador =0;
    for (let i =0; i<textSplit.length; i++){
      if (Number(textSplit[i])){
        contador ++;
      }
    }
    return contador;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const textSplit = text.split(' ')
    let contador = 0;
    for (let i =0; i <textSplit.length; i++){
      if (Number(textSplit[i])) {
        contador = contador + Number(textSplit[i])
      }
    }
    return contador;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

