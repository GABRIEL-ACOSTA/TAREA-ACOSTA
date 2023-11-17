let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Agregar evento de escucha de teclado
document.addEventListener('keydown', function(event) {
  const key = event.key;

  // Verificar si la tecla presionada es un número, operador o tecla de borrar
  if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === 'Backspace') {
    if (key === 'Backspace') {
      // Si es la tecla de borrar, limpiar un carácter del display
      display.value = display.value.slice(0, -1);
    } else {
      // De lo contrario, agregar la tecla presionada al display
      display.value += key;
    }
  } else if (key === 'Enter' || key === '=') {
    // Si la tecla presionada es Enter o =, realizar el cálculo
    calculate();
  }
});
