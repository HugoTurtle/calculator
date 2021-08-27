//Basic Math Functions//
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
//Operate Function//
function operate(num1, num2) {
    return add(num1,num2);
}
//Number Pad Functions
let displayValues = "";

for(let i = 0; i < 10; ++i) {
    let numberpadButton = document.getElementById(i);
    numberpadButton.onclick = function() {
        displayValues += i;
            const displayNumber = document.getElementById("displayScreen")
                displayNumber.textContent === "0" ? displayNumber.textContent = "" : "0" //Checks if there's a 0 in the displayScreen
                    displayNumber.textContent += i;
    }
}


