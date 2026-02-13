/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let freq= new Map();

    for(let ch of s){
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    for(let ch of t){
        //if character in t is not present in s
        if(!freq.has(ch)) return false;
        
        //else decrease the freq of ch
        freq.set(ch, freq.get(ch) - 1);
        //if freq falls negative then t has more occuring of ch than s
        if(freq.get(ch) < 0) return false;
    }
    return true;
};