const number = document.querySelectorAll(".number-button")
let currentInput = null
const screen = document.querySelector("#screen")
number.forEach((numbers) => {
    numbers.addEventListener('click', () => {
        if (resultTemp != null) (
            currentInput = resultTemp
        )
        if (screen.innerHTML == resultTemp) {
            clearScreen()
        }
        document.getElementById("screen").innerHTML += numbers.innerHTML
        console.log(numbers.innerHTML)
        
        if (currentInput == null) {
            currentInput = numbers.innerHTML
        } else {
            currentInput += numbers.innerHTML
            mathArray = currentInput.split(/[*+\-\/=]+/)
            mathArrayLength = mathArray.length
            console.log(mathArray)
            console.log(mathArrayLength)
        } 
        
        })
})
// if a != null b = current input?
const clear = document.querySelector("#clear-button")

let mathArray
let mathArrayLength
let array2

let operatorSymbol
const operator = document.querySelectorAll(".operator-button")
operator.forEach((operators) => {
    operators.addEventListener('click', () => {  
        currentInput += operators.innerHTML
        operatorSymbol = operators.innerHTML
        clearScreen()
        getResult()
        })
})


let resultTemp = null
function getResult() {
    let result
    if (mathArrayLength > 1) {
        if (operatorSymbol === '/'){
            result = parseFloat(mathArray[0]) / parseFloat(mathArray[1])
        } else if (operatorSymbol === '*') {
            result = parseFloat(mathArray[0]) * parseFloat(mathArray[1])
        } else if (operatorSymbol === '+') {
            result = parseFloat(mathArray[0]) + parseFloat(mathArray[1])
        } else if (operatorSymbol === '-') {
            result = parseFloat(mathArray[0]) - parseFloat(mathArray[1])
        }
    document.getElementById("screen").innerHTML = result
    console.log('works')
    mathArray[0] = result
    resultTemp = result
    mathArray = mathArray.splice(1, 1)
    console.log(mathArray)
    
    } else {}
}
clear.addEventListener('click', clearButton)
function clearButton() {
    clearScreen()
    mathArray = mathArray.splice(0, mathArray.length)
    result = 0
    currentInput = null
}
function clearScreen() {
    document.getElementById("screen").innerHTML = ''
}