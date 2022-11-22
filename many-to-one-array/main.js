const manyDimensionalArray = [1,2,[31,123,[1]],[1,2],[[[1]]]]; // array many dimensional array

function manyDimensionsToOne(manyDimArray) {
    return manyDimArray.flat(Infinity); // make one dimensional array from many dimensional
}

console.log(manyDimensionsToOne(manyDimensionalArray)); // function call