


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

let operation 
let mathArray
let mathArrayLength
let array2
function setOperation() {
    if (operation == undefined) {
        operation = document.getElementById("screen").innerHTML
    } else {
        operation += document.getElementById("screen").innerHTML
        mathArray = operation.split(/[*+\-\/=]+/)
        mathArrayLength = mathArray.length
        array1 = mathArray[0]
        array2 = mathArray[1]
        console.log(mathArray)
        console.log(mathArrayLength)
    } 
}
let operatorSymbol
const operator = document.querySelectorAll(".operator-button")
operator.forEach((operators) => {
    operators.addEventListener('click', () => {  
        setOperation(operation)
        operation += operators.innerHTML
        operatorSymbol = operators.innerHTML
        clearScreen()
        getResult()

        console.log()
        })
})

let result

function getResult() {
    if (mathArrayLength > 1) {
        if (operatorSymbol === '/'){
            result = parseFloat(array1) / parseFloat(array2)
        } else if (operatorSymbol === '*') {
            result = parseFloat(array1) * parseFloat(array2)
        } else if (operatorSymbol === '+') {
            result = parseFloat(array1) + parseFloat(array2)
        } else if (operatorSymbol === '-') {
            result = parseFloat(array1) - parseFloat(array2)
        }
    document.getElementById("screen").innerHTML = result
    console.log('works')
    } else {}
}
clear.addEventListener('click', clearButton)
function clearButton() {
    clearScreen()
    console.log(mathArray)
    mathArray.splice(0, mathArray.length)
}
function clearScreen() {
    document.getElementById("screen").innerHTML = ''
}