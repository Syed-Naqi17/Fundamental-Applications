document.getElementById('calculate').addEventListener('click', calculateLoan);

function calculateLoan(){
    const loanAmount = parseFloat(document.getElementById('loanAmount').value)
    const interestRate = parseFloat(document.getElementById('interestRate').value)
    const duration = parseFloat(document.getElementById('loanTerm').value)

    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(duration)){
        alert("Please Enter The Amounts")
    }

    const monthlyInterest = (interestRate*0.001) / 12;
    const totalPayment = duration
    const monthlyPayment = (loanAmount * monthlyInterest)/(1-Math.pow(1 + monthlyInterest, -totalPayment))
    const totalInterest = (monthlyPayment * totalPayment) - loanAmount

    displayResult(monthlyPayment, totalInterest);
}
function displayResult(monthlyPayment, totalInterest){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Monthly Payment : </strong> ${monthlyPayment.toFixed(2)}</p>
        <p><strong>ToTal Interest : </strong> ${totalInterest.toFixed(2)}</p>
    `;    
}