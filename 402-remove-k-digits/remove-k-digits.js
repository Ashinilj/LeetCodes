/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let n = num.length;
    let result= "";
    let st = [];

    for(let digit of num){
        while(k>0 && st[st.length-1] > digit && st.length > 0){
            st.pop();
            k--;
        }
        st.push(digit);
    }

    while(k>0){
        st.pop();
        k--;
    }

    result = st.join('').replace(/^0+/, '');
    return result === '' ? '0' : result;
};