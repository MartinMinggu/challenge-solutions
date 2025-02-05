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
