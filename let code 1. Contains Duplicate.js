class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let existNums = [];
        for(let num of nums)
        {
            if(existNums.includes(num))return true;
            existNums.push(num);
        };
        return false;
    }
}


// Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let temp = new Map();
    for(let i =0; i < nums.length; i++){
        let pengurangan =  target - nums[i];
        if(temp.has(pengurangan)){
            return [temp.get(pengurangan), i]
        }
        temp.set(nums[i], i);
    }
    return [];
};