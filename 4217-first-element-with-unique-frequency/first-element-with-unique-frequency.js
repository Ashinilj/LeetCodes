/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueFreq = function(nums) {
    let freqMap = new Map();
    let freqCount = new Map();

    //count frequency of every number
    for(let val of nums){
        freqMap.set(val, (freqMap.get(val) || 0) + 1);
    }

    //count frequencies of frequency
    for(let val of freqMap.values()){
        freqCount.set(val, (freqCount.get(val) || 0) + 1);
    }

    for(let num of nums){
        let freq= freqMap.get(num);
        if(freqCount.get(freq) === 1){
            return num;
        }
    }

    return -1;
};