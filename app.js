const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
    //if current display value is 0, relapce it, if not add number 
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
};

function addDecimal() {
    // if no decimal , add one
    if(!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
    }
}
function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    
}

// Add event listeners for number, operator, decimal buttons
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click' || 'touchstart', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click' || 'touchstart', () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click' || 'touchstart', () => addDecimal());
    }
})

// reset diplay
function resetAll() {
    calculatorDisplay.textContent = '0';
}

//clear event listener
clearBtn.addEventListener('click' || 'touchstart', resetAll);