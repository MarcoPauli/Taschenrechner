let resultArea = "";
let sqr = 0;
let possibleSquareResults = [];

function appendOperation (element) {
    resultArea = document.getElementById("resultArea");
    check();
    resultArea.innerHTML += element;
    return resultArea;
}

function calculateResult() {
    if (sqr) {
        calculateSquare();
    }
    change();
    resultArea = document.getElementById("resultArea");
    if (!sqr) {
        let result = eval(resultArea.innerHTML);
        resultArea.innerHTML = result;
    }
    resultArea.innerHTML = resultArea.innerHTML.replaceAll(".", ",");
    return resultArea;
}

function check() {
    resultArea = document.getElementById("resultArea");
    
}

function change() {
    resultArea = document.getElementById("resultArea");
    if (resultArea.innerHTML.includes("÷")) {
        resultArea.innerHTML = resultArea.innerHTML.replaceAll("÷", "/");
    }
    if (resultArea.innerHTML.includes("x")) {
        resultArea.innerHTML = resultArea.innerHTML.replaceAll("x", "*");
    }
    if (resultArea.innerHTML.includes(",")) {
        resultArea.innerHTML = resultArea.innerHTML.replaceAll(",", ".")
    }
    return resultArea;
}

function deleteLast() {
    resultArea = document.getElementById("resultArea");
    if (resultArea.innerHTML.endsWith(" ")) {
        resultArea.innerHTML = resultArea.innerHTML.slice(0, -3);
    } else {
        resultArea.innerHTML = resultArea.innerHTML.slice(0, -1);
    }
    return resultArea;
}

function deleteAll () {
    resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = "";
    return resultArea;
}

function showSquare() {
    resultArea = document.getElementById("resultArea");
    let basis = "<input style='vertical-align: sub; font-size: 64px; width: 10%; background-color: inherit; border: 2px solid white; color: white;' placeholder='x' type='number' id='squareBasis'>";
    let exponent = "<input style='vertical-align: sub; font-size: 64px; width: 10%; background-color: inherit; border: 2px solid white; color: white; position: relative; bottom : 20%;' value='2' type='number' id='squareExponent'>";
    resultArea.innerHTML += " " + basis + exponent + " ";
    return sqr = 1;
}

function calculateSquare() {
    let squareBasis = document.getElementById("squareBasis");
    let exponent = document.getElementById("exponent");
    let result = Math.pow(Number(squareBasis.value), Number(exponent.value));
    resultArea.innerHTML = result;
}