const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
stopBtn.setAttribute('disabled', true);
let timerId = null;

const handleBodyColor = () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
  }, 1000);
};

startBtn.addEventListener('click', handleBodyColor);
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
});
