// Add Caution: Input should be a Number, not a string or boolean 

// Description: 

function isLGSeven(inputNumber){
    let difference = inputNumber - 7;
    if (difference<7){
        return difference;
    }
    else{
        return inputNumber*2;
    }
}

let theNumber = isLGSeven(15);
console.log(theNumber)