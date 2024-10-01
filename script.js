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





