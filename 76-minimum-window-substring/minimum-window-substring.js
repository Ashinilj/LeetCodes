/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length) return "";

    let freqT = new Map();
    let freqS = new Map();

    for(let char of t){
        freqT.set(char, (freqT.get(char) || 0) + 1); 
    }

    let left=0, right=0, minLen= Infinity;
    let start=0, formed=0;

    while(right< s.length){
        freqS.set(s[right], (freqS.get(s[right]) || 0) + 1);

        if(freqT.has(s[right]) && freqT.get(s[right]) === freqS.get(s[right])){
            formed++;
        }

        while(formed === freqT.size){
            if(right - left + 1 < minLen){
                minLen = right - left + 1;
                start = left;
            }

            freqS.set(s[left], freqS.get(s[left])-1);
            if(freqT.has(s[left]) && freqS.get(s[left]) < freqT.get(s[left])){
                formed--;
            }

            left++;
        }
        right++;
    }
    return minLen === Infinity ? "" : s.substring(start, start+minLen);
};