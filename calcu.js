document.addEventListener("DOMContentLoaded", function() {
    // Initialize an array to store results
    var results = [];

    // Get the submit button element
    var submitButton = document.getElementById('submit-button');

    // Add click event listener to the submit button
    submitButton.addEventListener('click', function() {
        // Get the numbers and operator from the calculator
        var number1 = document.getElementById('number1').textContent;
        var operator = document.getElementById('opera').textContent;
        var number2 = document.getElementById('number2').textContent;

        if (number1.trim() === '' || number2.trim() === '') {
            console.log('Please enter both numbers.');
            return;
        }

        // Perform the calculation based on the operator
        var result;
        switch (operator) {
            case '+':
                result = parseFloat(number1) + parseFloat(number2);
                break;
            case '-':
                result = parseFloat(number1) - parseFloat(number2);
                break;
            case 'X':
                result = parseFloat(number1) * parseFloat(number2);
                break;
            case '%':
                result = parseFloat(number1) % parseFloat(number2);
                break;
            default:
                console.log('Invalid operator');
                return;
        }

        // Store the result in the array
        results.push(result);

        // Update the content of the game-score div
        updateGameScore();

        // Clear the calculator display
        clearCalculator();
    });

    // Function to clear the calculator display
    function clearCalculator() {
        document.getElementById('number1').textContent = '';
        document.getElementById('opera').textContent = '';
        document.getElementById('number2').textContent = '';
    }

    function updateGameScore() {
        var gameScoreDiv = document.getElementById('game-score');
        
        // Calculate the sum of all elements in the results array
        var sum = results.reduce((total, currentValue) => total + currentValue, 0);

        // Update the content of the game-score div
        gameScoreDiv.innerHTML = 'Score: ' + sum + '<br> Results: ' + results.join(', ');
    }
});
