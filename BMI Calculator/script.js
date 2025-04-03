document.getElementById("calculate").addEventListener("click", function (e) {
  e.preventDefault();

  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const heightFeet = parseInt(document.getElementById("height-feet").value);
  const heightInches = parseInt(document.getElementById("height-inch").value);
  const weight = parseInt(document.getElementById("weight").value);

  if (gender && age && heightFeet && heightInches && weight) {
    const totalHeightInInches = ((heightFeet * 12) + heightInches) * 0.0254;
    const bmi = weight / (totalHeightInInches * totalHeightInInches) ;

    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} and you are classified as ${category}.`;
  }
});
