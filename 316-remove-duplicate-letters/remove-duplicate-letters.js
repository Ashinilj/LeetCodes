/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let freq = {};

    for(let ch of s){
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let visited = new Set();
    let stack = [];

    for(let ch of s){
        freq[ch]--;

        if(visited.has(ch)) continue;

        while(stack.length > 0 && stack[stack.length-1] > ch && 
        freq[stack[stack.length-1]] > 0){
            visited.delete(stack.pop());
        }

        visited.add(ch);
        stack.push(ch);
    }
    return stack.join('');
};