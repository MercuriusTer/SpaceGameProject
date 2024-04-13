document.addEventListener("DOMContentLoaded", function() {
    // Get the inventory items
    var inventoryItems = document.querySelectorAll('.inv');
    var number1 = document.getElementById('number1');
    var number2 = document.getElementById('number2');

    // Array to store the numbers
    var numbers = [];

    // Function to return number to inventory
    function returnToInventory(number) {
        // Check if there is space in any inventory div
        for (var i = 0; i < inventoryItems.length; i++) {
            if (inventoryItems[i].textContent === '') {
                // Place the number in the empty inventory div
                inventoryItems[i].textContent = number;
                return true;
            }
        }
        return false;
    }

    // Add click event listener to number1 div
    number1.addEventListener('click', function() {
        // Get the number from the number1 div
        var number = parseInt(number1.textContent);
        if (!isNaN(number)) {
            // Return the number to inventory
            if (returnToInventory(number)) {
                // Clear the number1 div
                number1.textContent = '';
            }
        }
    });

    // Add click event listener to number2 div
    number2.addEventListener('click', function() {
        // Get the number from the number2 div
        var number = parseInt(number2.textContent);
        if (!isNaN(number)) {
            // Return the number to inventory
            if (returnToInventory(number)) {
                // Clear the number2 div
                number2.textContent = '';
            }
        }
    });

    // Add click event listener to each inventory item
    inventoryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Get the number from the inventory item
            var number = parseInt(item.textContent);

            // Check if the number is not NaN (not a number)
            if (!isNaN(number)) {
                // Add the number to the array
                numbers.push(number);

                // Check if there is space in the calculator numbers
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
