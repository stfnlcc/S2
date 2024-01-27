function swap(array, index1, index2) {
    if (!Array.isArray(array) || typeof index1 !== 'number' || typeof index2 !== 'number' ||
        index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        return;
    }

    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}

const res = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
console.log(swap(res, 1, 3)); 