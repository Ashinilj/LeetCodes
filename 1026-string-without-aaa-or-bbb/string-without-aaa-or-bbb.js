/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
    let finalString = "";

    while(a>0 || b>0) {
        if((a>=b && !finalString.endsWith('aa')) || finalString.endsWith('bb')){
            if(a>0){
                finalString += 'a';
                a--;
            }
        }
        else{
            if(b>0){
                finalString += 'b';
                b--;
            }
        }
    }
    return finalString;
};