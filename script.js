function add(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

function multi(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

let firstNumber = null;
let operator = null;
let secondNumber = null;

function operate(operator, a, b) {
    switch (operator) {
        case '+':
             return add(a, b);
        case '-': 
             return sub(a, b);
        case '*':
             return multi(a, b);
        case '/':
             return divide(a, b);

        default: return null;
    }
}

let displayValue = "0";

function updateDisplay() {
    const display = document.querySelector("#display");
    display.textContent = displayValue;
}

function appendNumber(digit) {
    if (displayValue === "0") {
        displayValue = digit;
    } else {
        displayValue += digit;
    }
    updateDisplay();
}

const digits = document.querySelectorAll(".digit");
digits.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.textContent);
    });
});

function Erase() {
    displayValue = "0";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    updateDisplay();
}

const clearButton= document.querySelector(".clear");
clearButton.addEventListener("click", Erase);

const operators = document.querySelectorAll(".operator");
operators.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber === null) {
            firstNumber = parseFloat(displayValue);
        } else {
            secondNumber = parseFloat(displayValue);
            firstNumber = operate(operator, firstNumber, secondNumber);
        }
        operator = button.textContent;
        displayValue = "0";
        updateDisplay();
    });
});      

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
    if (operator && firstNumber !== null) {
        secondNumber = parseFloat(displayValue);
        displayValue = operate(operator, firstNumber, secondNumber).toString();
        firstNumber = null;
        operator = null;
        updateDisplay();
    }
});














