const sentence = "What is the average airspeed velocity of an unladen swallow"; // sentence

findLongestWord(sentence); // function call

function findLongestWord(sentence) {
    const words = sentence.split(' '); // creating array
    const wordsLength = words.map((elem) => elem.length); // creating array with length of each word
    const maxNumber = Math.max(...wordsLength); // Finding max number
    const result = words.filter(elem => elem.length === maxNumber); // creating array with the biggest words
    console.log(result.join(', ')); // string result
}
