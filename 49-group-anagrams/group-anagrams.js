/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const group = new Map();

    for(let s of strs){
        const word = s.split('').sort().join('');

        if(!group.has(word)){
            group.set(word, [])
        }
        group.get(word).push(s);
    }

    return Array.from(group.values());
};