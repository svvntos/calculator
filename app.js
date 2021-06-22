const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
    console.log(number)
};

// Add event listeners for number, operator, decimal buttons

inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0 ) {
        inputBtn.addEventListener('click' || 'touchstart', () => sendNumberValue(inputBtn));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click' || 'touchstart', () => sendNumberValue(inputBtn));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click' || 'touchstart', () => sendNumberValue(inputBtn));
    }
})