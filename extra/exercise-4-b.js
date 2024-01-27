function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1; 
}

function removeItem(array, text) {
    const indexToRemove = findArrayIndex(array, text);

    if (indexToRemove !== -1) {
        array.splice(indexToRemove, 1);
    }

    return array;
}


const example= ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
console.log(removeItem(example, 'Mosquito'));

const example2 = ['Manzana', 'Banana', 'Uva', 'Pera'];
console.log(removeItem(example2, 'Banana'));