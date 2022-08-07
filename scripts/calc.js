//problem one output number to screen



let a = null;
let b = null;
let inputSwitch = false;
const number = document.querySelectorAll(".number-button");
const screen = document.querySelector("#screen");
number.forEach((numbers) => {
    numbers.addEventListener('click', () => {
        if (result != null) {
            screen.innerHTML = '';
            result = null
        }
        if (a === null && inputSwitch === false) {
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
let operator = null //TODO in current build you dont need to press an operator after calculating. i would like to change that.
const add = document.querySelector("#plus-btn")
add.addEventListener('click', addButton)
function addButton() {
    if (operator != null) {
        calculate()
    }
    inputSwitch = true
    operator = "+"
}
const subtract = document.querySelector("#minus-btn")
subtract.addEventListener('click', subtractButton)
function subtractButton() {
    if (operator != null) {
        calculate()
    }
    inputSwitch = true
    operator = "-"
}
const multiply = document.querySelector("#multiply-btn")
multiply.addEventListener('click', multiplyButton)
function multiplyButton() {
    if (operator != null) {
        calculate()
    }
    inputSwitch = true
    operator = "*"
}
const divide = document.querySelector("#division-btn")
divide.addEventListener('click', divideButton)
function divideButton() {
    if (operator != null) {
        calculate()
    }
    inputSwitch = true
    operator = "/"
}
let result = null
const equals = document.querySelector("#equals-btn")
equals.addEventListener('click', calculate)
function calculate() {
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
            break
    }
    screen.innerHTML = result
    a = result;
    b = null
    operator = null
}

const clear = document.querySelector("#clear-btn")
clear.addEventListener('click', clearButton)
function clearButton() {
    screen.innerHTML = '';
    a = null;
    b = null;
    operator = null;
    inputSwitch = false
}
