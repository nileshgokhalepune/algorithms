const threeSumClosest = (nums, target) =>{
    let len = nums.length;
    let sum=Number.MAX_VALUE;
    nums.sort();
    for(let i=0; i< len && sum != 0; i++){
        let left = i+1;
        let right = len-1;
        while(left < right)
        {
            let currSum = nums[i] + nums[left] + nums[right];             
            if(Math.abs(target-currSum) < sum){
                sum = target-currSum;
            }
            if (currSum < target){
                left++;
            }else {
                right--;
            }
        }
    }
    return target- sum;
}

console.log(threeSumClosest([1,1,1,0],1));
console.log(threeSumClosest([-1,2,1,-4],1));