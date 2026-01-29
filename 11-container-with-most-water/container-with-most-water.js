/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left= 0, right= height.length-1;
    let maxArea= Number.MIN_SAFE_INTEGER;

    while(left< right){
        let currArea= Math.min(height[left], height[right]) * (right-left);
        maxArea= Math.max(currArea, maxArea);

        if(height[left] > height[right]) right--;
        else left++;

    }
    return maxArea;
};