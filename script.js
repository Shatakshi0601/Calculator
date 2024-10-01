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
    if (operator === '+')
        return add(a,b);
    else if (operator === '-')
        return sub(a,b);
    else if (operator === '*')
        return multi(a,b);
    else if (operator === '/')
        return divide(a,b);
    else {
        return null;
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
    operator = button.textContent;    
    operate(operator, a, b);
    updateDisplay();        
    });
});










