const button = document.getElementById("btn");
button.addEventListener("click",detectChar);

function detectChar(){

    console.log("It is Working");

    const input = document.getElementById("inputType").value
    const result = document.getElementById("result")

    if(input){
      const uniCodeValue = input.charCodeAt(0);
      const resultValue = `The Unicode Value Of ${input} is ${uniCodeValue}`
      result.textContent = resultValue
    }
    else{
        result.textContent = "Please Enter A Character"
    }
}