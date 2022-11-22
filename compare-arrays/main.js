const firstArray = [1,2,3,4]; // first array
const secondArray = [1,2,3,4,5]; // array to compare with

function compareArrays(mainArray, comparingArray) {
    if (firstArray.length === secondArray.length) {
        let sameArrays = true; // variable that we use for checking if first array is the same as second
        firstArray.forEach((elem, index) =>
            secondArray[index]!==elem ? sameArrays=false: NaN) // there we check if each symbol is same as symbol with the same index in another array
        return sameArrays;
    }
    return false; // if length is different, the arrays are different too.
}

console.log(compareArrays(firstArray, secondArray)); // function call