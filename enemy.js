document.addEventListener("DOMContentLoaded", function() {
    // Get the game board element
    var gameBoard = document.getElementById('game-board');

    // Get the inventory divs
    var inventoryItems = document.querySelectorAll('.inv');

    // Function to respawn a single enemy at a random position on the top edge of the game board
    function respawnEnemy() {
        // Check if the game over modal is visible
        var modalOverlay = document.getElementById('modal-overlay');
        if (modalOverlay.style.display === 'flex') {
        // If the game over modal is visible, stop respawning enemies
            return;
        }

        // Create a new enemy element
        var newEnemy = document.createElement('div');
        newEnemy.className = 'enemy';
        newEnemy.style.display = 'block';
        newEnemy.textContent = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 100

        // Calculate a random horizontal position within the width of the game board
        var gameBoardWidth = gameBoard.clientWidth;
        var enemyWidth = newEnemy.clientWidth;
        var randomLeft = Math.random() * (gameBoardWidth - enemyWidth); // Adjusted for enemy width
        newEnemy.style.left = randomLeft + 'px';

        // Append the new enemy to the game board
        gameBoard.appendChild(newEnemy);

        // Add click event listener to the new enemy
        newEnemy.addEventListener('click', function() {
            collectNumber(this);
        });

        // Start updating the position and behavior of the new enemy
        updatePosition(0, newEnemy);
        }

            // Function to update the position and behavior of an enemy
        function updatePosition(currentPosition, enemy) {
            // Set speed of falling
            var speed = 3; // Adjust as needed

            // Set initial horizontal position
            var horizontalPosition = Math.random() * Math.PI * 1; // Random initial horizontal position

            // Apply vertical movement
            currentPosition += speed; // Update vertical position
            enemy.style.top = currentPosition + 'px';

            // Apply horizontal sway with damping effect
            var swayAmplitude = Math.random() * 5 + 5; // Random amplitude between 5 and 10
            var swayFrequency = Math.random() * 0.05 + 0.05; // Random frequency between 0.05 and 0.1

            // Damping factor to reduce the amplitude of the swing
            var dampingFactor = 0.95;

            // Calculate the new sway offset
            horizontalPosition += swayFrequency;
            var swayOffset = Math.sin(horizontalPosition) * swayAmplitude;

            // Update enemy position
            enemy.style.left = 'calc(10% + ' + Math.random() * + 'px)';

            // Get the height of the game board
            var gameBoardHeight = gameBoard.clientHeight;

            // Check if enemy has reached or exceeded the bottom of game board
            if (currentPosition >= gameBoardHeight - enemy.clientHeight) {
                // Remove the enemy from the game board
                gameBoard.removeChild(enemy);
            } else {
                // Continue updating position
                requestAnimationFrame(function() {
                    updatePosition(currentPosition, enemy);
                });
            }
    }

    // Function to collect the number from the enemy
    function collectNumber(enemy) {
        // Get the number from the enemy
        var number = parseInt(enemy.textContent);

        // Check if there is space in any inventory div
        for (var i = 0; i < inventoryItems.length; i++) {
            if (inventoryItems[i].textContent === '') {
                // Place the number in the empty inventory div
                inventoryItems[i].textContent = number;
                // Remove the enemy from the game board
                gameBoard.removeChild(enemy);
                // Exit the loop
                return;
            }
        }

        // If all inventory divs are full, do nothing
    }

    // Spawn a new enemy every second
    setInterval(respawnEnemy, 1000);
});
