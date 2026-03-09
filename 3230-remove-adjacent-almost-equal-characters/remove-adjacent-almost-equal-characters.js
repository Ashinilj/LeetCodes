/**
 * @param {string} word
 * @return {number}
 */
var removeAlmostEqualCharacters = function(word) {
    let n = word.length;
    let count = 0;

        let i = 0;
        while(i < n-1){
            let diff = Math.abs(word.charCodeAt(i) - word.charCodeAt(i+1));
            if(diff === 1 || diff === 0) {
                count++;
                i += 2;
            }
            else i++;
        }
        return count;
};