// Importa el modulo analyzer desde './analyzer.js' 
import analyzer from './analyzer.js';

// Obtiene la referencia al elemento <textarea> con el nombre 'user-input'
const cajaTexto = document.querySelector("textarea[name=user-input]");

// Obtiene referencias a diferentes elementos <li> mediante atributos 'data-testid'
const li1 = document.querySelector('[data-testid="word-count"]');
const li2 = document.querySelector('[data-testid="character-count"]');
const li3 = document.querySelector('[data-testid="character-no-spaces-count"]');
const li4 = document.querySelector('[data-testid="number-count"]');
const li5 = document.querySelector('[data-testid="number-sum"]');
const li6 = document.querySelector('[data-testid="word-length-average"]');

// Agrega un evento de escucha para cuando se escribe en <textarea>
cajaTexto.addEventListener("keyup", () => {
  // Actualiza el contenido de los elementos <li> con los resultados de las funciones del modulo 'analyzer'
  li1.textContent = "Palabras: " + analyzer.getWordCount(cajaTexto.value);
  li2.textContent = "Caracteres: " + analyzer.getCharacterCount(cajaTexto.value);
  li3.textContent = "Caracteres sin espacios: " + analyzer.getCharacterCountExcludingSpaces(cajaTexto.value);
  li4.textContent = "Numeros: " + analyzer.getNumberCount(cajaTexto.value);
  li5.textContent = "Suma Numeros: " + analyzer.getNumberSum(cajaTexto.value);
  li6.textContent = "Promedio por palabra: " + analyzer.getAverageWordLength(cajaTexto.value);
});

// Obtiene referencia al botón con el ID 'reset-button'
const boton = document.getElementById("reset-button");

// Agrega un evento de escucha para cuando se haga clic en el boton
boton.addEventListener("click", function () {
  // Restablece el contenido del <textarea> a una cadena vacía y los resultados de las funciones a 0
  cajaTexto.value = "";
  li1.textContent = "Palabras: 0";
  li2.textContent = "Caracteres: 0";
  li3.textContent = "Caracteres sin espacios: 0";
  li4.textContent = "Numeros: 0";
  li5.textContent = "Suma Numeros: 0";
  li6.textContent = "Promedio por palabra: 0";
});

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
