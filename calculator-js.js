var operatorRegex = /\s+[+\-/*]+\s+/;
var display = getDisplay();

function getDisplay() {

    return document.getElementById("calc-display-span");

}

function getValue(button){

    return button.value;
    
}

function addNumber(button) {

    var onFirstDigit = true;

    if(operatorRegex.test(display.innerHTML)) onFirstDigit = false;

    var value = getValue(button);

    console.log(onFirstDigit);

    if(value == 0 && (display.innerHTML.length < 1
    || (!onFirstDigit && display.innerHTML.trim().split(" ").length == 2))){
        return;
    }

    display.innerHTML += value;

}

function addOperator(operator) {

    var value = getValue(operator);

    if(display.innerHTML.length < 1) {
        if(value == "-") display.innerHTML += value;
        return;
    }

    if(display.innerHTML.trim().split(" ").length == 3) calculate();


    if(operatorRegex.test(display.innerHTML)) return;

    display.innerHTML += " " + value + " ";

}

function calculate() {

    var first;
    var second;
    var operator;
    var result;

    if(display.innerHTML.trim().split(" ").length < 3){
        return;
    }

    var content = display.innerHTML.trim().split(" ");
    first = parseInt(content[0]);
    second = parseInt(content[2]);
    operator = content[1];

    switch (operator){

        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "/":
            result = first / second;
            break;
        case "*":
            result = first * second;
            break;
        default:
            break;
    }

    display.innerHTML = parseInt(result);

}

function clearDisplay() {
    display.innerHTML = "";
}
