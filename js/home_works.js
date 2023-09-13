const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

const parentWidth = parentBlock.clientWidth;
const parentHeight = parentBlock.clientHeight;

const childWidth = childBlock.clientWidth;
const childHeight = childBlock.clientHeight;

let posX = 0;
let posY = 0;

const move = () => {
    if (posX <= parentWidth - childWidth && posY === 0) {
        posX++;
        childBlock.style.left = `${posX}px`;
        setTimeout(move, 1);
    } else if (posX >= parentWidth - childWidth && posY <= parentHeight - childHeight) {
        posY++;
        childBlock.style.top = `${posY}px`;
        setTimeout(move, 1);
    } else if (posX > 0 && posY >= parentHeight - childHeight) {
        posX--;
        childBlock.style.left = `${posX}px`;
        setTimeout(move, 1);
    } else if (posX === 0 && posY >= 0) {
        posY--;
        childBlock.style.top = `${posY}px`;
        setTimeout(move, 1);
    }
};

move();



/// 2

let minutes = 0;
let seconds = 0;
let mlSeconds = 0;
let intervalId = 0;

const minutesElement = document.querySelector("#minutesS");
const secondsElement = document.querySelector("#secondsS");
const mlSecondsElement = document.querySelector("#ml-secondsS");

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

startButton.addEventListener("click", () => {
    intervalId = setInterval(() => {
        mlSeconds++;
        if (mlSeconds === 100) {
            mlSeconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }
        updateDisplay();
    }, 10);
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
});

stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
});

resetButton.addEventListener("click", () => {
    clearInterval(intervalId);
    minutes = 0;
    seconds = 0;
    mlSeconds = 0;
    updateDisplay();
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
});

function updateDisplay() {
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
    mlSecondsElement.textContent = formatTime(mlSeconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}



