document.addEventListener("DOMContentLoaded", function() {
    // Initialize an array to store results
    var score = [];
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
                // if(result ==  21)
                break;
            case '-':
                result = parseFloat(number1) - parseFloat(number2);
                break;
            case '×':
                result = parseFloat(number1) * parseFloat(number2);
                break;
            case '÷':
                result = Math.round(parseFloat(number1) / parseFloat(number2));
                break;
            
            default:
                console.log('Invalid operator');
                return;
        }

        clearCalculator()

        // Store the result in the array
        // เปลี่ยนตรงนี้ กำหนดเกณฑ์แทนตรงนี้ไปเลย
        // results.push(result);
        switch (result) {
            case 21 || 27:
                score.push(6);
                results.push(result)
                break;
            case 22 || 26:
                score.push(7);
                results.push(result)
                break;
            case 23 || 25:
                score.push(8);
                results.push(result)
                break;
            case 24:
                score.push(10);
                results.push(result)
                break;
            default:
                document.getElementById('number1').textContent = result;
                break;
        }
        // Update the content of the game-score div
        updateGameScore();
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
        var sum = score.reduce((total, currentValue) => total + currentValue, 0);

        // Update the content of the game-score div
        gameScoreDiv.innerHTML = 'Score: ' + sum + '<br> Results: ' + results.join(', ');
    }
    
});
