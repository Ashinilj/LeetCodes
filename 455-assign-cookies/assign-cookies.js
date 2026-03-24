/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);
    let m = s.length;
    let n = g.length;

    if(m===0) return 0;

    let i = 0, j = 0;
    while(i < n && j < m){
        if(s[j] >= g[i]){
            i++;
        }
        j++;
    }
    return i;
};