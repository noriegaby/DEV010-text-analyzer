import analyzer from './analyzer.js';

// Importa el módulo analyzer desde './analyzer.js' 
const cajaTexto = document.querySelector("textarea[name=user-input]");
const li1 = document.querySelector('[data-testid="word-count"]');
const li2 = document.querySelector('[data-testid="character-count"]');
const li3 = document.querySelector('[data-testid="character-no-spaces-count"]');
const li4 = document.querySelector('[data-testid="number-count"]');
const li5 = document.querySelector('[data-testid="number-sum"]');
const li6 = document.querySelector('[data-testid="word-length-average"]');

cajaTexto.addEventListener("keyup", () => {
  li1.textContent = "Palabras: " + analyzer.getWordCount(cajaTexto.value);
  li2.textContent = "Caracteres: " + analyzer.getCharacterCount(cajaTexto.value);
  li3.textContent = "Caracteres sin espcios: " + analyzer.getCharacterCountExcludingSpaces(cajaTexto.value);
  li4.textContent = "Numeros: " + analyzer.getNumberCount(cajaTexto.value);
  li5.textContent = "Suma Numeros: " + analyzer.getNumberSum(cajaTexto.value);
  li6.textContent = "Promedio Letras: " + analyzer.getAverageWordLength(cajaTexto.value);
});

const boton = document.getElementById("reset-button");
boton.addEventListener("click", function () {
  cajaTexto.value = "";
  li1.textContent = "Palabras: 0";
  li2.textContent = "Caracteres: 0";
  li3.textContent = "Caracteres sin espacios: 0";
  li4.textContent = "Numeros: 0";
  li5.textContent = "Suma Numeros: 0";
  li6.textContent = "Promedio Letras: 0";
});



//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
