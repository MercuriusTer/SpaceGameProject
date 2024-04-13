document.addEventListener("DOMContentLoaded", function() {
    // Initialize variables
    var startTime;
    var endTime;
    var gameDuration = 20; // Duration of the game in seconds
    var timerDisplay = document.getElementById('timer');

    // Start the game
    startGame();

    // Function to start the game
    function startGame() {
        // Set start time
        startTime = Date.now();

        // Calculate end time
        endTime = startTime + gameDuration * 1000;

        // Start the timer
        updateTimer();

        // End the game when time is up
        setTimeout(endGame, gameDuration * 1000);
    }

    // Function to update the timer display
    function updateTimer() {
        var remainingTime = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
        var minutes = Math.floor(remainingTime / 60);
        var seconds = remainingTime % 60;
        timerDisplay.textContent = 'Time: ' + formatTime(minutes) + ':' + formatTime(seconds);

        // Update the timer every second
        if (remainingTime > 0) {
            setTimeout(updateTimer, 1000);
        }
    }

    // Function to format time (add leading zero if needed)
    function formatTime(time) {
        return (time < 10 ? '0' : '') + time;
    }

    function showGameOverModal() {
        var modalOverlay = document.getElementById('modal-overlay');
        modalOverlay.style.display = 'flex';
    }

    // Function to end the game
    function endGame() {
    // Display the summary score

    showGameOverModal();
    var finalScore = document.getElementById('game-score').textContent;
    var resultshow = document.getElementById('score-results');

    resultshow.innerHTML = 'Game Over!\nYour final score: ' + finalScore;

    // Create retry and close buttons
    var retryButton = document.getElementById('retry-button');
    retryButton.addEventListener('click', function() {
        // Restart the game when the retry button is clicked
        location.reload();
    });

    var closeButton = document.getElementById('main-menu-button');
    closeButton.addEventListener('click', function() {
        window.location.href = './menu.html';
    });
}});