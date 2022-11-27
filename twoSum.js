// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
//tabulation
const twoSum = (nums, target) => {
   const map = new Map();
   for(let n in nums){
       if(map.has(nums[n]))
       {
           let firstIndex = map.get(nums[n]);
           return [firstIndex, n];
       }
       let remainder = target - nums[n];
       map.set(remainder, n);
   }
   return [];
}
    //                 9
    //         -2  -7     -11  -15
    //     7      2         -2   -6
    // -2       -2           -2     -2
    // 5        0            -4      - 8
            
         
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([1,4,2,3],4));