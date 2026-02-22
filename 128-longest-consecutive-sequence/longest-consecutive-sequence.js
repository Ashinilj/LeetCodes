/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    let set = new Set(nums);

    let maxLen= 0;
    for(let num of set){
        if(!set.has(num-1)){
            let currNum= num;
            let currLen=1;

            while(set.has(currNum+1)){
                currLen++;
                currNum++;
            }
            maxLen= Math.max(maxLen, currLen);
        }
    }
    return maxLen;
};