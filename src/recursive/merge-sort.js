function merge(left, right, compareFn) {
    let i = 0, j = 0;
    const result = [];

    while (i < left.length && j < right.length) {
        result.push(
            compareFn(left[i], right[j]) === -1 ? left[i++] : right[j++]
        );
    }

    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0; // Ordena de forma crescente
}

function mergeSort(array, compareFn = defaultCompare) {
    if (array.length > 1) {
        const { length } = array;
        const middle = Math.floor(length / 2);
        const left = mergeSort(array.slice(0, middle), compareFn);
        const right = mergeSort(array.slice(middle, length), compareFn);
        array = merge(left, right, compareFn);
    }
    return array;
}

console.log(mergeSort([10, 5, 8, 1, 3])); // Testando com um array