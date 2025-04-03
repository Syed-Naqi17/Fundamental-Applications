const ageCalculatorForm = document.getElementById("ageCalculator");
const btn = document.getElementById("btn")
btn.addEventListener("click", (event) => {
    event.preventDefault();
    calculateAge();
})


// ageCalculatorForm.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     calculateAge();
// })


function calculateAge(){
    
    console.log("Calculating")

    const today = new Date();
    const birthDateInput = document.getElementById("birthDate").value;
    const birthDateParts = birthDateInput.split("-");
    const birthDay = birthDateParts[0];
    const birthMonth = birthDateParts[1] - 1;
    const birthYear = birthDateParts[2];
    const birthDate = new Date(birthYear, birthMonth, birthDay);

    console.log(today)

    const isValidDate = (date) => {
        return(
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );
    }

    if(!isValidDate(birthDate)){
        alert("Please Enter The date in Valid date Format DD-MM-YYYY")
        return;
    }

    const ageInMilliSecounds = today - birthDate;
    const ageInSecounds = Math.floor(ageInMilliSecounds/1000);
    const ageInMinutes = Math.floor(ageInSecounds/60);
    const ageInHours = Math.floor(ageInMinutes/60);
    const ageInDays = Math.floor(ageInHours/24);
    const ageInMonths = Math.floor(ageInDays/30);
    const ageInWeeks = Math.floor(ageInDays/7);
    const ageInYears = Math.floor(ageInDays/365.25);

    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    result.innerHTML = `
         <div class="result-item">
            <h3>Age</h3>
            <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
         </div>  
         <div class="result-item">
            <h3>Months Passed</h3>
            <p>${ageInMonths}</p>
         </div>    
         <div class="result-item">
            <h3>Weeks Passed</h3>
            <p>${ageInWeeks}</p>
         </div>  
         <div class="result-item">
            <h3>Days Passed</h3>
            <p>${ageInDays}</p>
         </div>  
         <div class="result-item">
            <h3>Years Passed</h3>
            <p>${ageInYears}</p>
         </div>  
         <div class="result-item">
            <h3>Hours Passed</h3>
            <p>${ageInHours}</p>
         </div>
         <div class="result-item">
            <h3>Minutes Passed</h3>
            <p>${ageInMinutes}</p>
         </div>  
         <div class="result-item">
            <h3>Secounds Passed</h3>
            <p>${ageInSecounds}</p>
         </div>
         <div class="result-item">
            <h3>Millisecounds Passed</h3>
            <p>${ageInMilliSecounds}</p>
         </div>
    `;

    resultContainer.style.display = "block";

}