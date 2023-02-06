// Add Caution: Input should be a positive number , can not be a string.

// Description: 

function mindGame(number){
    let result = ((((number * 3) + 10) / 2) - 5);
    return result;
}

let finalResult = mindGame(33);
console.log(finalResult)