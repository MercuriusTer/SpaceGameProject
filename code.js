document.addEventListener("DOMContentLoaded", function() {
    // Get all operator div elements
    var operators = document.querySelectorAll('.operator');

    // Add click event listeners to each operator
    operators.forEach(function(operator) {
        operator.addEventListener('click', function() {
            // Get the clicked operator symbol
            var symbol = this.textContent;

            // Update the calcu div with the clicked operator symbol
            var calcuDiv = document.getElementById('opera');
            calcuDiv.textContent = symbol;

            // Set the cooldown duration (in milliseconds)
            var cooldownDuration = 7000; // 3 seconds

            // Disable the clicked operator and show cooldown timer
            disableOperator(operator, cooldownDuration, symbol);
        });
    });

    // Function to disable the operator for a certain duration and show the cooldown timer
    function disableOperator(operator, cooldownDuration, symbol) {
        // Get the current symbol before updating it
        var currentSymbol = operator.textContent;

        // Disable the operator by adding a 'disabled' class
        operator.classList.add('disabled');

        // Set a timeout to re-enable the operator after the cooldown duration
        var startTime = Date.now();
        var endTime = startTime + cooldownDuration;

        updateTimer(operator, endTime);

        var timerInterval = setInterval(function() {
            updateTimer(operator, endTime);

            // Check if the cooldown duration has passed
            if (Date.now() >= endTime) {
                // Re-enable the operator by removing the 'disabled' class
                operator.classList.remove('disabled');

                // If the operator text content has been changed during cooldown, revert it back
                if (operator.textContent !== symbol) {
                    operator.textContent = symbol;
                }

                clearInterval(timerInterval);
            }
        }, 1000);
    }

    // Function to update the timer display next to the operator
    function updateTimer(operator, endTime) {
        var remainingTime = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
        operator.textContent = remainingTime + 's';
    }
})