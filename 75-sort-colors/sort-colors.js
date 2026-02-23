/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n= nums.length;

    let right = n-1, left = 0, mid = 0;
    while(mid <= right){
        if(nums[mid] == 0){
            [nums[left], nums[mid]] = [nums[mid], nums[left]];
            left++;
            mid++;
        }
        else if(nums[mid] == 2){
            [nums[right], nums[mid]] = [nums[mid], nums[right]];
            right--;
        }
        else mid++;
    }
};