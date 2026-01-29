/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n= nums.length;
        let minProduct= nums[0];
        let maxProduct= nums[0];
        let res= nums[0];
        
        for(let i=1; i<n; i++){
            if(nums[i] < 0){
                [minProduct, maxProduct] = [maxProduct, minProduct];
            }
            
            minProduct= Math.min(nums[i], minProduct * nums[i]);
            maxProduct= Math.max(nums[i], maxProduct * nums[i]);
            res= Math.max(res, maxProduct);
        }
        return res;
};