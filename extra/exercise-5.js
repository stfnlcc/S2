function rollDice(numFaces) {
    if (typeof numFaces !== 'number' || numFaces <= 0) {
        return;
    }

    const randomValue = Math.random();

    const result = Math.floor(randomValue * numFaces) + 1;

    return result;
}

console.log(rollDice(6)); 
console.log(rollDice(4));
