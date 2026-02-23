/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freq= new Map();
    let res = '';
    for(let val of s){
        freq.set(val, (freq.get(val) || 0) + 1);
    }

    let sorted = [...freq.entries()].sort((a, b) => b[1] - a[1]);

    for(let [ch, count] of sorted){
        res += ch.repeat(count);
    }

    return res;
};