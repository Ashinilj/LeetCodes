/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let low=0, high=0;

    for(let ch of s){
        if(ch === '('){
            low++;
            high++;
        }
        else if(ch === ')'){
            low--;
            high--;
        }

        else if (ch === '*'){
            low--;
            high++;
        }
        if(high < 0) return false;
        if(low < 0) low = 0;
    }
    return low === 0;
};