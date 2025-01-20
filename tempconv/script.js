const tempBox = document.getElementById(`tempBox`);
const toFarenheit = document.getElementById(`ctf`);
const toCelsius = document.getElementById(`ftc`);
const result = document.getElementById(`result`);
let temp;
function convert () {
    if(tempBox.value) {      
        if(toFarenheit.checked) {
            temp = Number(tempBox.value);
            temp = temp * 9 / 5 + 32;
            result.textContent = temp.toFixed(1) + "°F";
        }
        else if(toCelsius.checked) {
            temp = Number(tempBox.value);
            temp = (temp-32) * (5/9);
            result.textContent = temp.toFixed(1) + "°C"; 
        }
        else {
            result.textContent = "Select a unit ";
        }
    }
    else {
        result.textContent = "Enter a value ";
    }
}

function resetForm () {
    result.textContent = " ";
    tempBox.value = " ";
    toFarenheit.checked = false;
    toCelsius.checked = false;
}