/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0, right = 0, maxLen = 0;
    let freq= new Map();

    while(right < s.length){
        freq.set(s[right], (freq.get(s[right]) || 0) + 1);

        while(freq.get(s[right]) > 1){
            freq.set(s[left], freq.get(s[left]) - 1);
            left++;
        }

        maxLen = Math.max(maxLen, right-left+1);
        right++;
    }

    return maxLen;
};