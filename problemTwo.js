// Add Caution: Input must be a string 

// Description: 

function evenOdd(inputString){
    let stringLength = inputString.length;
    
    if(stringLength % 2 === 0){
        return "even";
    }
    else{
        return "odd";
    }
}

let myString = "chatgpt";

let evenOrOdd = evenOdd(myString);
console.log(evenOrOdd)