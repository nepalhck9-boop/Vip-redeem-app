let seconds = 600;

const timer = setInterval(() => {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  document.getElementById("timer").textContent =
    `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

  if (seconds <= 0) {
    clearInterval(timer);
    return;
  }

  seconds--;
}, 1000);