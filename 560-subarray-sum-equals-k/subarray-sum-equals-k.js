/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let n= nums.length;
    let prefixSum = 0, count=0;
    let map= new Map();

    for(let i=0; i<n; i++){
        prefixSum += nums[i];

        if(prefixSum === k) count++;

        if(map.has(prefixSum - k)){
            count += map.get(prefixSum-k);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }
    return count;
};