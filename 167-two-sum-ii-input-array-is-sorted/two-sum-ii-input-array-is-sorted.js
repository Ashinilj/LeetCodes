/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let n= numbers.length;
    let left= 0, right= n-1;

    while(left<right){
        let sum= numbers[left] + numbers[right];
        if(sum === target){
            return [left+1, right+1];
        }
        else if(sum < target) left++;
        else right--;
    }
    return [-1, -1];
};