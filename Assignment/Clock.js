// Stopwatch functionality
let stopwatchInterval;
let stopwatchTime = 0; // Time in seconds

function updateStopwatchDisplay() {
    const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
    const seconds = String(stopwatchTime % 60).padStart(2, '0');
    document.getElementById('stopwatchDisplay').textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById('startStopwatch').addEventListener('click', () => {
    document.getElementById('startStopwatch').disabled = true;
    document.getElementById('stopStopwatch').disabled = false;
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        updateStopwatchDisplay();
    }, 1000);
});

document.getElementById('stopStopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    document.getElementById('startStopwatch').disabled = false;
    document.getElementById('stopStopwatch').disabled = true;
});

document.getElementById('resetStopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    updateStopwatchDisplay();
    document.getElementById('startStopwatch').disabled = false;
    document.getElementById('stopStopwatch').disabled = true;
});

// Pomodoro functionality
let pomodoroInterval;
let pomodoroTime = 25 * 60; // 25 minutes in seconds
let isPomodoroActive = false;

function updatePomodoroDisplay() {
    const minutes = String(Math.floor(pomodoroTime / 60)).padStart(2, '0');
    const seconds = String(pomodoroTime % 60).padStart(2, '0');
    document.getElementById('pomodoroDisplay').textContent = `${minutes}:${seconds}`;
}

document.getElementById('startPomodoro').addEventListener('click', () => {
    if (!isPomodoroActive) {
        isPomodoroActive = true;
        document.getElementById('startPomodoro').disabled = true;
        document.getElementById('stopPomodoro').disabled = false;
        pomodoroInterval = setInterval(() => {
            if (pomodoroTime > 0) {
                pomodoroTime--;
                updatePomodoroDisplay();
            } else {
                clearInterval(pomodoroInterval);
                alert('Pomodoro session complete! Take a break.');
                isPomodoroActive = false;
                document.getElementById('startPomodoro').disabled = false;
                document.getElementById('stopPomodoro').disabled = true;
            }
        }, 1000);
    }
});

document.getElementById('stopPomodoro').addEventListener('click', () => {
    clearInterval(pomodoroInterval);
    isPomodoroActive = false;
    document.getElementById('startPomodoro').disabled = false;
    document.getElementById('stopPomodoro').disabled = true;
});

document.getElementById('resetPomodoro').addEventListener('click', () => {
    clearInterval(pomodoroInterval);
    pomodoroTime = 25 * 60;
    updatePomodoroDisplay();
    isPomodoroActive = false;
    document.getElementById('startPomodoro').disabled = false;
    document.getElementById('stopPomodoro').disabled = true;
});

// Initialize displays
updateStopwatchDisplay();
updatePomodoroDisplay();
