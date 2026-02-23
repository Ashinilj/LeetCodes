/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) return [];
    intervals.sort((a,b) => a[0] - b[0]); //sort the intervals by starting time

    let ans= [];
    let prev= intervals[0];

    for(let i=1; i<intervals.length; i++){
        let curr = intervals[i];

        if(prev[1] >= curr[0]){
            prev[1] = Math.max(prev[1], curr[1]);
        }

        else{
            ans.push(prev);
            prev= curr;
        }
    }  
    ans.push(prev);  
    return ans;
};