function convertTemp() {
    const input = document.getElementById("tempInput").value;
    const unit = document.getElementById("unitSelect").value;
    const resultText = document.getElementById("resultText");

    // Validation
    if (input === "" || isNaN(input)) {
        resultText.innerText = "Please enter a valid number ❗";
        return;
    }

    const temp = parseFloat(input);
    let result = "";

    if (unit === "c") {
        // Celsius → Fahrenheit & Kelvin
        const f = (temp * 9/5) + 32;
        const k = temp + 273.15;
        result = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    } 
    else if (unit === "f") {
        // Fahrenheit → Celsius & Kelvin
        const c = (temp - 32) * 5/9;
        const k = c + 273.15;
        result = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    } 
    else if (unit === "k") {
        // Kelvin → Celsius & Fahrenheit
        const c = temp - 273.15;
        const f = (c * 9/5) + 32;
        result = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }

    resultText.innerText = result;
}