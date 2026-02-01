let currentDisplay = "";
const operators = ['+', '-', '*', '/'];

function updateDisplay(){
let screen = document.getElementById("screen")


    if (currentDisplay === "") {
        screen.innerText = "0";
    } else {
        screen.innerText = currentDisplay;
    }
}

let numDot = 0;
let numOpe = 0;
function appendValue(value) {
    const lastChar = currentDisplay.slice(-1);

    if (operators.includes(value) && operators.includes(lastChar)) {
        currentDisplay = currentDisplay.slice(0, -1);  //avoid double operator
    }

    if (currentDisplay === "" && operators.includes(value) && value !== '-') return; //first symbol can be "-"

    if (value === ".") {  // "." check
        const parts = currentDisplay.split(/[\+\-\*\/\(\)]/);
        const lastPart = parts[parts.length - 1];

        if (lastPart.includes(".")) return;
    }
    currentDisplay += value
    updateDisplay()
}


function clearScreen() {
    currentDisplay = "";
    updateDisplay();
}

function deleteLast() {
    currentDisplay = currentDisplay.toString().slice(0, -1);
    updateDisplay();
}



function compute() {
    try {
        if (operators.includes(currentDisplay.at(-1))) currentDisplay = currentDisplay.slice(0, -1); 
        if (currentDisplay === "") return;
        // eval
        let result = eval(currentDisplay);
        result = parseFloat(result.toFixed(3));
        currentDisplay = result.toString();
        updateDisplay();

    } catch (error) {
        currentDisplay = "Error";
        updateDisplay();
        setTimeout(clearScreen, 1500);
    }
}

