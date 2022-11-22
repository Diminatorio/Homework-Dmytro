const numsArray = [1,2,3,4,5]; // numbers array

function numsSumSquares(numsArray) {
    const summarizedNums = numsArray.reduce((summedNum, elem, index) =>
        index!==1 ? summedNum+elem**2: // number of previous sum up with current number to second degree
            summedNum**2+elem**2); // if index === 1, power 0 and 1 elements to 2 degree
    console.log(summarizedNums);
}

numsSumSquares(numsArray) // function call