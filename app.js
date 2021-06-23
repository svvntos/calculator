const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');


// calculate first and second values dependind on operator
const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
    '=': (firstNumber, secondNumber) => secondNumber,
  };


let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
    //if current display value is 0, relapce it, if not add number 

};

function addDecimal() {
    // if operator pressed, dont add decimal
    if (awaitingNextValue) return;
    // if no decimal , add one
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
    }
}
function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    // prevent multiple operaters
    if (operatorValue && awaitingNextValue) {
     operatorValue = operator;
        return;
    }
    // assign firstValue if no value
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        // console.log(firstValue, operatorValue ,currentValue);
        const calculation = calculate[operatorValue](firstValue, currentValue);
        calculatorDisplay.textContent = calculation;
        // console.log('calculation', calculation)
        firstValue = calculation;
    }

    //Ready for next value , store operator

    awaitingNextValue = true;
    operatorValue = operator;


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

// reset all vaslues diplay
function resetAll() {
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
}

//clear event listener
clearBtn.addEventListener('click' || 'touchstart', resetAll);