/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum=0, maxSum = nums[0];

    for (let num of nums){
        sum += num;
        maxSum= Math.max(maxSum, sum);

        if(sum < 0) sum = 0;
    }
    return maxSum;
};