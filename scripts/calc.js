//problem one output number to screen



let a = null;
let b = null;
let inputSwitch = false;
const number = document.querySelectorAll(".number-button");
const screen = document.querySelector("#screen");
number.forEach((numbers) => {
    numbers.addEventListener('click', () => {
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
let operator = null
const add = document.querySelector("#plus-btn")
add.addEventListener('click', addButton)
function addButton(a, b) {
    inputSwitch = true
    operator = "+"
}

const equals = document.querySelector("#equals-btn")
equals.addEventListener('click', calculate)
function calculate() {
    screen.innerHTML = parseFloat(a) + parseFloat(b)
}
