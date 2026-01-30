/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    let size = n * n;

    let countArray = new Array(size + 1).fill(0);
    let missing = -1, repeating = -1;

    // Count occurrences
    for (const row of grid) {
        for (const val of row) {
            countArray[val]++;
        }
    }

    // Find missing and repeating
    for (let i = 1; i <= size; i++) {
        if (countArray[i] === 0) missing = i;
        else if (countArray[i] === 2) repeating = i;
    }

    return [repeating, missing];
};