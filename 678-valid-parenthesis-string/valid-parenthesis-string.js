/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let openStack= [];
    let starStack = [];

    for(let i=0; i<s.length; i++){
        let ch = s[i];
        if(ch === '('){
            openStack.push(i);
        }
        else if(ch === '*'){
            starStack.push(i);
        }
        else{
            if(openStack.length > 0){
                openStack.pop();
            }
            else if(starStack.length > 0){
                starStack.pop();
            }
            else return false;
        }
    }

    while(openStack.length > 0 && starStack.length > 0){
        if(openStack.pop() > starStack.pop()){
            return false;
        }
    }

    return openStack.length === 0;
};