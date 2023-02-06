// Add Caution: Input should be an Array, an array of number, not an array of string

// Description:


function findingBadData(dataArray){
    let count = 0;
    for (let number of dataArray){
        if(number<0){
            count++;
        }
    }
    return count;
}

let dataSheet = [ -4, -9, -5, -33, -55 ];
let result = findingBadData(dataSheet);
console.log(result)