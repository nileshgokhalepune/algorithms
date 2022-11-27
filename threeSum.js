// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

threeSum = (nums) => {
    nums.sort();
    let results = []
    for(let i=0; i < nums.length-2;i++){
        if(i > 0 && nums[i] == nums[i-1]) continue;
            let left = i+1;
            let right = nums.length -1;
            while(left < right){
                let sum = nums[i] + nums[left] + nums[right]
                if(sum === 0){
                    results.push([nums[i], nums[left], nums[right]]);
                    while(left < right && nums[left] == nums[left+1]) left++;
                    while(left < right && nums[right] == nums[right -1]) right--;
                    left++; right--;
                }else if(sum < 0){
                    left++;
                }else{
                    right--;
                }
            }
        }
    
    return results;
}
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));
//console.log(threeSum([3,0,-2,-1,1,2]));
//console.log(threeSum([0,0,0,0]));
//console.log(threeSum([-1,0,1,2,-1,-4]));
//console.log(threeSum([-1, 0, 1]));

// [-1, -1, -2, -3, -4, 0, 0, 1, 2, 3, 4]
// [[-3,-1,4],[-2,-1,3]]
// [-1,-1,2][-1,-2,3][-1,1,2][-2,0,2]