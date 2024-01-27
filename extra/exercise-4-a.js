function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1;
}

const example = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log(findArrayIndex('Mosquito')); 
console.log(findArrayIndex('Ajolote')); 
console.log(findArrayIndex('Elefante'));
