document.getElementById('calculateBtn').addEventListener("click", calculateTip);
function calculateTip(){
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const serviceRating = parseFloat(document.getElementById("serviceRating").value);
    const splitCount = parseInt(document.getElementById("splitCount").value);
    const mealType = document.getElementById("mealType");
    const tipAmount = document.getElementById("tipAmount");
    const totalAmount = document.getElementById("totalAmount");
    const amountPerPerson = document.getElementById("amountPerPerson");

    if(isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount)){
        tipAmount.textContent = "Please enter valid numbers";
        totalAmount.textContent = "";
        amountPerPerson.textContent = "";
        return;
    }

    let tip;
        switch(serviceRating) {
            case 1:
                tip = billAmount * 0.05;
                break;
            case 2:
                tip = billAmount * 0.10;
                break; 
            case 3:
                tip = billAmount * 0.15;
                break;   
            case 4:
                tip = billAmount * 0.20;
                break;            
        }

    let totalAmountvalue = billAmount + tip;
    let amountPerPersonvalue = totalAmountvalue / splitCount;   
    
    if(mealType === "dinner"){
        tip += 5;
        totalAmountvalue += 5;
        amountPerPersonvalue += 5; 
    }

    tipAmount.textContent = `Tip : $${tip.toFixed(2)}`
    totalAmount.textContent = `Total Amount : $${totalAmountvalue.toFixed(2)}`
    amountPerPerson.textContent = `Amount Per Person : $${amountPerPersonvalue.toFixed(2)}`
}