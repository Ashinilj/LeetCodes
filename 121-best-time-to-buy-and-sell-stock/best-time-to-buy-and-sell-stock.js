/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minVal= Infinity;
    let maxVal= 0;

    for(let price of prices){
        if(price < minVal) minVal = price;
        maxVal = Math.max(maxVal, price - minVal);
    }

    return maxVal;
};