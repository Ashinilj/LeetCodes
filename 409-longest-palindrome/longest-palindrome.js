/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let freq = new Map();
    let length = 0;
    let hasOdd = false;

    for(let ch of s){
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    for(let [char, count] of freq){
        if(count % 2 === 0) {
            length += count;
        }

        else {
            length += count - 1;
            hasOdd = true;
        }
    }

    if(hasOdd) length++;

    return length;
};