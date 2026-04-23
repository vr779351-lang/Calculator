function backspace() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}
function calculator() {
    try {
        let result = document.getElementById("display").value;
        document.getElementById("display").value = eval(result);

    } catch {
        document.getElementById("display").value = "Error";
    }
}
document.addEventListener("keydown", function (event) {
    let key = event.key;

    if (!isNaN(key) || "+-=/.".includes(key)) {
        press(key);
    } else if (key === "Enter") {
        calculator();
    } else if (key === "Backspace") {
        backspace();
    }
})
function press(value) {
    document.getElementById("display").value += value
}
function clearDisplay() {
    document.getElementById("display").value = "";
}