/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let n= nums.length;
    let left=0, right= 0;

    let minLen= Infinity, sum=0;
    while(right < n){
        sum += nums[right];

        while(sum >= target){
            minLen= Math.min(minLen, right-left+1);
            sum -= nums[left];
            left++;
        }
        right++;
    }
    return minLen === Infinity ? 0 : minLen;
};