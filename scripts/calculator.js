const number = document.querySelectorAll(".number-button")

const screen = document.querySelector("#screen")
number.forEach((numbers) => {
    numbers.addEventListener('click', () => {
        document.getElementById("screen").innerHTML += numbers.innerHTML
        console.log(numbers.innerHTML)
        })
})
function setScreen (operation) {
    operation = document.getElementById("screen").innerHTML
}

const clear = document.querySelector("#clear-button")
clear.addEventListener('click', clearScreen)
function clearScreen() {
    document.getElementById("screen").innerHTML = ''
}
let operation 
let mathArray
function setOperation() {
    if (operation == undefined) {
        operation = document.getElementById("screen").innerHTML
    } else {
        operation += document.getElementById("screen").innerHTML
        let mathArray = operation.split(/[*+\-=]+/)
        console.log(mathArray)
    }
    
}
const operator = document.querySelectorAll(".operator-button")
operator.forEach((operators) => {
    operators.addEventListener('click', () => {
        
        setOperation(operation)
        operation += operators.innerHTML
        clearScreen()
        getResult()

        console.log()
        })
})

/*const addition = document.querySelector("#plus-button")
addition.addEventListener('click', () => {
    setScreen()
    clearScreen()
    getResult()
    
})


const equals = document.querySelector('#equals-button')
equals.addEventListener('click', () => {
    getResult()
    clearScreen()
})*/


//split(*+/-=) the operation string. take the substrings 
const format = /[*+\-=]+/;
let result
function getResult() {
    if (mathArray.length > 1) {
    result = parseFloat(operation)
    document.getElementById("screen").innerHTML = result
    console.log('works')
    } else {
        console.log(operation)
        console.log('doesnt')
    }
}

const sums = new function sumNumbers(num1, num2) {
    num1 = num1 + num2
}