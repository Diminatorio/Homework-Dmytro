const symbolsArray = ['1','10','1','4','1','2','2']; // array with random symbols

function doUnique(symbolsArray) {

    const resultArray = symbolsArray.reduce((uniqueSymbols, elem) =>
        uniqueSymbols.includes(elem) ? uniqueSymbols : [...uniqueSymbols, elem], // if unique array has already had elem, write same array or add elem to array
        []); // if array is empty
    console.log(resultArray);
}

doUnique(symbolsArray); // function call