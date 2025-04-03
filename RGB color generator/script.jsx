const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');
const valueRed = document.getElementById('value1');
const valueGreen = document.getElementById('value2');
const valueBlue = document.getElementById('value3');
const colorBox = document.getElementById('color-box');
const copyBtn = document.getElementById('copyButton');
const RGBvalue = document.getElementById('inputType');

inputRed.addEventListener('input', updateColor);
inputGreen.addEventListener('input', updateColor);
inputBlue.addEventListener('input', updateColor);
copyBtn.addEventListener('click', copyRGBvalue);

function updateColor() {
     const redValue = inputRed.value;
     const greenValue = inputGreen.value;
     const blueValue = inputBlue.value;

     const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
     colorBox.style.backgroundColor = rgbColor;

     valueRed.textContent = redValue;
     valueGreen.textContent = greenValue;
     valueBlue.textContent = blueValue;

     RGBvalue.textContent = rgbColor;
}
updateColor();

function copyRGBvalue(){
    const redValue = inputRed.value;
    const greenValue = inputGreen.value;
    const blueValue = inputBlue.value;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    navigator.clipboard.writeText(rgbColor)
        .then(()=>{
            alert('RGB value has been copied to clipboard: ' + rgbColor);
        })
        .catch((error) =>{
            console.error("Failed to copy RGB value: " + error)
        })

}