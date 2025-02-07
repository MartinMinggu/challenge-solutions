public class Solution
{
	public bool hasDuplicate(int[] nums)
	{
		List<int> existNum = new List<int>();
		foreach (int num in nums)
		{
			if (existNum.Contains(num) == true)
			{
				return true;
			}
			existNum.Add(num);
		}
		return false;
	}
}


// 2. TwoSum
public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        for(int i = 0; i < nums.Length -1; i++){
            for (int j = i+1; j < nums.Length; j++){
                if(nums[i] + nums[j] == target){
                    return new int [2]{i, j};
                }
            }
        }
        return new int [2];
    }
}