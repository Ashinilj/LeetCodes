/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxVal=0, minVal= Infinity;

    for(let price of prices){
        if(price < minVal) minVal= price;
        maxVal= Math.max(maxVal, price-minVal);
    }
    return maxVal;
};