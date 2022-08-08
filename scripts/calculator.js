//TODO add keyboard functionality
let a = null;
let b = null;
let inputSwitch = false;
const number = document.querySelectorAll(".number-button");
const screen = document.querySelector("#screen");
number.forEach((numbers) => {
    numbers.addEventListener('click', () => {
        if (result != null) {
            screen.innerHTML = '';
            result = null;
        }
        if ((a != null && a.length > 9 && inputSwitch === false) || (b != null && b.length > 9 && inputSwitch === true)) {
        }
        else if (a === null && inputSwitch === false) {
            a = numbers.innerHTML;
            screen.innerHTML = a;
        } else if ( inputSwitch === false) {
            a += numbers.innerHTML;
            screen.innerHTML = a;
        } else if (b === null && inputSwitch === true) {
            b = numbers.innerHTML;
            screen.innerHTML = b;
        } else if (inputSwitch === true) {
            b += numbers.innerHTML;
            screen.innerHTML = b;
        }     
    });
});
let operator = null;

const add = document.querySelector("#plus-btn");
add.addEventListener('click', addButton);
function addButton() {
    if (b !== null) {
        calculate();
    }
    inputSwitch = true;
    operator = "+";
}
const subtract = document.querySelector("#minus-btn");
subtract.addEventListener('click', subtractButton);
function subtractButton() {
    if (b !== null) {
        calculate();
    }
    inputSwitch = true;
    operator = "-";
}
const multiply = document.querySelector("#multiply-btn");
multiply.addEventListener('click', multiplyButton);
function multiplyButton() {
    if (b !== null) {
        calculate();
    }
    inputSwitch = true;
    operator = "*";
}
const divide = document.querySelector("#division-btn");
divide.addEventListener('click', divideButton);
function divideButton() {
    if (b !== null) {
        calculate();
    }
    inputSwitch = true;
    operator = "/";
}
let result = null
const equals = document.querySelector("#equals-btn");
equals.addEventListener('click', calculate);
function calculate() {
    if (b == 0 && operator === '/') {
        hiddenClear();
        return;
    }
    else if (b === null) {

    } else {
        switch (operator) {
            case '+':
                result = parseFloat(a) + parseFloat(b);
                break;
            case '-':
                result = parseFloat(a) - parseFloat(b);
                break;
            case '/' :
                result = parseFloat(a) / parseFloat(b);
                break;
            case '*':
                result = parseFloat(a) * parseFloat(b);
                break;
            case null:
                result = a;
        }
        a = result;
        let resultString = result.toString();
        if (resultString.length > 10 && resultString.includes(".") != true) {
        result = result.toExponential();
        } else if ( resultString && resultString.includes('.') === true) {
            result = Math.round(parseFloat(resultString.substring(0,16))*10000000000000)/10000000000000;
        }
        screen.innerHTML = result;
        b = null;
        operator = null;
}
}

const clear = document.querySelector("#clear-btn");
clear.addEventListener('click', clearButton);
function clearButton() {
    screen.innerHTML = '';
    infoClear();
}
function hiddenClear() {
    screen.innerHTML = 'You found the hidden clear button!';
    infoClear();
}
function infoClear() {
    a = null;
    b = null;
    operator = null;
    inputSwitch = false;
    result = null;
}
const backspace = document.querySelector("#backspace-btn");
backspace.addEventListener('click', backspaceButton);
function backspaceButton() {
    if (inputSwitch === false) {
        a = a.slice(0,-1);
        screen.innerHTML = a;
    } else if (inputSwitch === true) {
        b = b.slice(0,-1);
        screen.innerHTML = b;
    }
}