/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let amount = 0;
    let n= height.length;

    let left= 0, right= n-1, leftMax= 0, rightMax=0;
    while(left < right){
        if(height[left] < height[right]){
            if(height[left] > leftMax) leftMax= height[left];
            amount += (leftMax - height[left]);

            left++;
        }
        else{
            if(height[right] > rightMax) rightMax= height[right];
            amount += (rightMax - height[right]);

            right--;
        }
    }
    return amount;
};