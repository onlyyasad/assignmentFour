// Add Caution: Input should be a number 

// Description: 

function gemsToDiamond(friendOneGems, friendTwoGems, friendThreeGems){
    const friendOneGemPower = 21;
    const friendTwoGemPower = 32;
    const friendThreeGemPower = 43;
    const friendOneDiamonds = friendOneGemPower * friendOneGems;
    const friendTwoDiamonds = friendTwoGemPower * friendTwoGems;
    const friendThreeDiamonds = friendThreeGemPower * friendThreeGems;
    const totalDiamonds = friendOneDiamonds + friendTwoDiamonds + friendThreeDiamonds;
    console.log(totalDiamonds)
    if (totalDiamonds >= 1000*2){
        const getDiamond = totalDiamonds - 2000;
        return getDiamond;
    }
    else {
        return totalDiamonds;
    }
}

let result = gemsToDiamond(100, 5, 1);
console.log(result)