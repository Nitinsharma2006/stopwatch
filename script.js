let startTime = 0;
let elapsedTime = 0;
let interval;
let isRunning = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {
  const time = elapsedTime;
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

  display.textContent =
    hours.toString().padStart(2, '0') + ':' +
    minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0');
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    interval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 1000);
  }
}

function pauseStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(interval);
  }
}

function resetStopwatch() {
  isRunning = false;
  clearInterval(interval);
  elapsedTime = 0;
  updateDisplay();
  laps.innerHTML = '';
}

function lapTime() {
  if (isRunning) {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
}
