// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Arithmetic functions
    function add(number1, number2) {
        return number1 + number2;
    }

    function subtract(number1, number2) {
        return number1 - number2;
    }

    function multiply(number1, number2) {
        return number1 * number2;
    }

    function divide(number1, number2) {
        if (number2 === 0) {
            return 'Error: Cannot divide by zero';
        }
        return number1 / number2;
    }

    // Get DOM elements
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const resultSpan = document.getElementById('calculation-result');

    // Event listeners for each operation
    document.getElementById('add').addEventListener('click', function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = add(number1, number2);
        resultSpan.textContent = result;
    });

    document.getElementById('subtract').addEventListener('click', function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = subtract(number1, number2);
        resultSpan.textContent = result;
    });

    document.getElementById('multiply').addEventListener('click', function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = multiply(number1, number2);
        resultSpan.textContent = result;
    });

    document.getElementById('divide').addEventListener('click', function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = divide(number1, number2);
        resultSpan.textContent = result;
    });
});
