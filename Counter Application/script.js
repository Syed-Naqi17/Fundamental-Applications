document.getElementById('plusBtn').addEventListener("click", increment);
document.getElementById('minusBtn').addEventListener("click", decrement);
document.getElementById('reset').addEventListener("click", reset);

let counterDisplay = document.getElementById("counterDisplay");
let counterValue = 0

function updateCounterDisplay(){
        counterDisplay.textContent = counterValue;
}

function increment(){
        counterValue ++
        updateCounterDisplay()
}
function decrement(){
    counterValue--
    updateCounterDisplay()
}
function reset(){
    counterValue = 0 
    updateCounterDisplay()
}
