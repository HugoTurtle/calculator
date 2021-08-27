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
const displayScreen = document.getElementById("displayScreen");
let displayValues = "";

for(let i = 0; i < 10; ++i) {
    let numberpadButton = document.getElementById(i);
    numberpadButton.onclick = function() {
        displayValues += i;
            displayScreen.textContent === "0" ? displayScreen.textContent = "" : "0"; //Checks if there's a 0 in the displayScreen
                displayScreen.textContent += i;
    }
}

 //Operator Functions
 let operatorSymbol = "";
 
     const operatorButtons = document.querySelectorAll("button.operatorButton")
     operatorButtons.forEach(function(button) {
        button.onclick = function() {
            if(operatorSymbol != "") {
                
            }
            switch(button.textContent) {
                case "+":
                    operatorSymbol = "+" 
                    break;
                case "-":
                    operatorSymbol = "-" 
                    break;
                case "*": 
                    operatorSymbol = "*"
                    break;
                case "/":
                    operatorSymbol = "/"
                    break;
                case "=":
                    alert("Under Construction");
                    //Will run a function
                    break;
            }
            displayScreen.textContent += operatorSymbol;
        }
     });
 


