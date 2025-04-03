document.getElementById("checkButton").addEventListener("click", palindrome)

function palindrome(){
    const input = document.getElementById("inputtext")
    const result = document.getElementById("result")

    if(isPalindrome(input.value)){
        result.textContent = `"${input.value}" is a Palindrome`
    }
    else{
        result.textContent = `"${input.value}" is not a Palindrome`
    }

    result.classList.add("fadeIn");
    input.value = "";
}

function isPalindrome(str){
    const cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g,''); 
    const reversestr = cleanstr.split('').reverse('').join('');
    return cleanstr === reversestr;
}

console.log("It is working")
