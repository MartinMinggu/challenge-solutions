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
