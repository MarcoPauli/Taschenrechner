/*Darkmode muss noch bearbeitet werden!
Variablen müssen erstellbar sein
*/
let speicher;
let result = 1;

function appendOperation(operation) {
    let root = document.getElementById("rootValue");
    let resultArea = document.getElementById("resultArea");
    let container = resultArea;
    resultArea.innerHTML +=operation;
    if(container.innerHTML.includes('√<textarea id="rootValue"></textarea>')) {
        document.getElementById("rootValue").value = root.value;
    }
}

function calculateResult() {
    let container = document.getElementById("resultArea");
    let rootValue = document.getElementById("rootValue");
    if(container.innerHTML.includes('√<textarea id="rootValue"></textarea>')) {
        let rootResult = eval(rootValue.value);
        rootResult = Math.sqrt(rootResult);
        rootResult = rootResult.toString();
        let textReplace = '√<textarea id="rootValue"></textarea>';
        container.innerHTML = container.innerHTML.replace(textReplace, rootResult);
        result = eval(container.innerHTML);
    } else if (container.innerHTML.includes("log_b")) {
        calculateLogarithm();
    } else {
        result = eval(container.innerHTML);
    }
    container.innerHTML = result;
    return speicher = result;
}

function log () {
    let resultArea = document.getElementById("resultArea");
    let logarithmSyntax = "log <input type='text' id='b' name='log_b'> <sup><input type='text' id='a' name='log_a'></sup>";
    resultArea.innerHTML += logarithmSyntax;
}

function calculateLogarithm () {
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let x = (Math.log10(a.value)) / (Math.log10(b.value));
    return result = x;
}

function deleteLast() {
    let container = document.getElementById("resultArea");
    if(container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
    }
}

function deleteAll() {
    let container = document.getElementById("resultArea");
    container.innerHTML = null;
}

function ans() {
    let container = document.getElementById("resultArea");
    let containerAverage = container.innerHTML;
    if (speicher == undefined) {
        let ansText = "Ans ist undefiniert";
        container.innerHTML = ansText;
        setTimeout(function () {
            container.innerHTML = containerAverage;
        }, 2000);
    } else {
        container.innerHTML += speicher;
    }
}

function showAlertBox() {
    let element = document.getElementById("settingsBox");
    element.style.display = "block";
}

function hideAlertBox() {
    let element = document.getElementById("settingsBox");
    element.style.display = "none";
}

function strip() {
    let checkbox = document.getElementById("checkbox");
    let strip = document.getElementById("strip");
    if (checkbox.checked == true){
      strip.style.display = "block";
    } else {
       strip.style.display = "none";
    }
  }

function darkmodeDaymode () {
    let a = document.getElementById("resultArea").style;
    let table = document.querySelector("table");
    let td = document.querySelector("td");
    if (a.backgroundColor == "white") {
        a.backgroundColor = "rgb(40, 40, 40)";
        a.color = "white";
        document.getElementById("mode").innerHTML = "Hell";
    } else if (a.backgroundColor = "rgb(40, 40, 40)") {
        a.backgroundColor = "white";
        a.color = "black";
        table.backgroundColor = "gray";
        td.backgroundColor = "gray";
        document.getElementById("mode").innerHTML = "Dunkel";
    }
}

function addVariable () {
    let userInputName = document.getElementById("variablenname");
    let userInputValue = document.getElementById("variablenwert");
    alert(userInputName.value + userInputValue.value)
    let insideHTML = document.getElementById("strip");
    let syntax = "<button style='border: 2px solid blue;border-right:none;' id='" + userInputName.value + "'>" + userInputName.value + "<button style='border: 2px solid blue;border-left:none;'>X</button>" + "<button style='border: 2px solid blue;border-left:none;' onclick=\"deleteElement(" + "'" + userInputName.value + "'" + userInputValue.value + "'" + ")\">X</button></button>";
    let element = document.getElementById(userInputName.value);
    element.addEventListener("click", registerVariable);
    alert(insideHTML.innerHTML)
    alert(syntax)
    let x = "<button style='border: 2px solid blue;border-left:none;' onclick='registerVariable(\'" + userInputValue.value + "\')'" + ")\">X</button>";
    insideHTML.innerHTML += x;
    if (syntax.includes("null") || syntax.includes("undefined")) {
        deleteElement(userInputName.value, userInputValue.value);
    }
    insideHTML.innerHTML += syntax;
}

function deleteElement(variableName, variableValue) {
    alert(syntax)
    let container = document.getElementById("strip");
    let syntax = "<button style='border: 2px solid blue;border-right:none;' id='" + variableName.value + "'>" + variableName.value + "<button style='border: 2px solid blue;border-left:none;' onclick='registerVariable(\'" + variableValue.value + "\')'" + ")\">X</button>" + "<button style='border: 2px solid blue;border-left:none;' onclick=\"deleteElement(" + "'" + variableName.value + "'" + ")\">X</button></button>";
    container.innerHTML.slice(syntax, "");
    container.innerHTML = null;
    container.style.listStyleType = "none";
}

function registerVariable() {
    let resultArea = document.getElementById("resultArea");
    resultArea.innerHTML += number;
}