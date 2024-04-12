document.addEventListener("DOMContentLoaded", function() {
    // Get the inventory items
    var inventoryItems = document.querySelectorAll('.inv');
    var clearButton = document.getElementById('clear-button');

    // Add click event listener to the clear button
    clearButton.addEventListener('click', function() {
        // Get all inventory items
        var inventoryItems = document.querySelectorAll('.inv');

        // Clear the text content of each inventory item
        inventoryItems.forEach(function(item) {
            item.textContent = '';
        });
    });

    // Add click event listener to each inventory item
    inventoryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Get the number from the inventory item
            var number = parseInt(item.textContent);

            // Check if the number is not NaN (not a number)
            if (!isNaN(number)) {
                // Check if there is space in the calculator numbers
                var number1 = document.getElementById('number1');
                var number2 = document.getElementById('number2');

                if (number1.textContent === '') {
                    // Place the number in the first calculator number
                    number1.textContent = number;
                    // Clear the inventory item
                    item.textContent = '';
                } else if (number2.textContent === '') {
                    // Place the number in the second calculator number
                    number2.textContent = number;
                    // Clear the inventory item
                    item.textContent = '';
                }

                // If both calculator numbers are already filled, do nothing
            }
        });
    });
});