// script.js

let displayValue = ''; // To hold the value shown on the screen

const display = document.getElementById('display');

// Append numbers to the display
function appendNumber(number) {
    if (displayValue === '0') displayValue = ''; // Clear leading zero
    displayValue += number;
    updateDisplay();
}

// Append operators to the display
function appendOperator(operator) {
    if (!displayValue || isNaN(displayValue.slice(-1))) return; // Avoid multiple operators
    displayValue += operator;
    updateDisplay();
}

// Clear the display
function clearDisplay() {
    displayValue = '';
    updateDisplay('0');
}

// Remove the last character (backspace)
function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay(displayValue || '0');
}

// Calculate the result
function calculateResult() {
    try {
        // Use eval for basic parsing, but be cautious in production
        const result = eval(displayValue.replace('÷', '/').replace('×', '*'));
        displayValue = String(result);
        updateDisplay();
    } catch (e) {
        updateDisplay('Error');
        setTimeout(() => clearDisplay(), 1500); // Reset after showing error
    }
}

// Update the display
function updateDisplay(value) {
    display.textContent = value || displayValue;
}
