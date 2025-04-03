function calculateLove(){
    console.log("Your Function is Working")
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(name1 === "" || name2 === ""){
        alert("Please Enter The Valid Information")
    }
    else{
        const lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result")
        result.innerHTML = `${name1} and ${name2} 's Love Percentage is ${lovePercentage}`

        if(lovePercentage < 30){
            result.innerHTML += "<br> Not A Great Match Keep Looking" 
        }
        else if(lovePercentage >= 30 && lovePercentage <= 40){
            result.innerHTML += "<br> You Should Think About Your Partner"
        }
        else if(lovePercentage >= 50 && lovePercentage <= 59){
            result.innerHTML += "<br> Good Match"
        }
        else if(lovePercentage >= 60 && lovePercentage <= 90){
            result.innerHTML += "<br> It is a good RelationShip"
        }
        else{
            result.innerHTML += "<br> Great Match! Love is in the Air"
        } 
    }
}