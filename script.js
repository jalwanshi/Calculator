function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key.match(/[0-9+\-*/.=]|Enter|Backspace|Escape/)) {
      event.preventDefault();
      if (key === 'Enter') {
        calculate();
      } else if (key === 'Backspace') {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
      } else if (key === 'Escape') {
        clearDisplay();
      } else {
        appendValue(key);
      }
    }
  });
  document.addEventListener('dblclick', function() {
    if (window.innerWidth < 576) {
      document.body.style.zoom = '100%';
    }
  });
      