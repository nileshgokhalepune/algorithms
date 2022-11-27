const kSum = (nums, target, start, k) => {
   let mp = new Map();
   let arr =[];
   for(let i=0; i< nums.length; i++){
       for(let j=i+1; j< nums.length; j++){
           for(let k=j+1; k < nums.length; k++){
               for(let l=k+1; l< nums.length; l++){
                   let sum = nums[i] + nums[j] + nums[k] + nums[l];
                   if(sum >  target)
                    break;
                   if(sum == target){
                       if((!mp.has(nums[i]) || !mp.has(nums[j]) || !mp.has(nums[k]) || !mp.has(nums[l]))){
                        mp.set(nums[i],i);
                        mp.set(nums[j],j);
                        mp.set(nums[k],k);
                        mp.set(nums[l],l);
                        arr.push([nums[i], nums[j], nums[k], nums[l]]);
                       }
                       
                   }
               }
           }
       }
   }
   return arr;
}
//[1,0,-1,0,-2,2]

arr =[1,0,-1,0,-2,2];// [2,2,2,2,2];
target = 0;
arr.sort();
console.log(kSum(arr, target,0,4));

// const sum = (nums, target) =>{
//     nums.sort();
//     return kSum(nums, target,0 , 4);
// }
// const kSum = (nums, target, start, k) => {
//     const res = [];
//     if(start == nums.length)
//     {
//         return res;
//     }
//     let average = target/k;

//     if(nums[start] > average || average > nums[nums.length-1]){
//         return res;//
//     }
//     if(k==2){
//         return twoSum(nums,target,start);
//     }

//     for(let i=start; i< nums.length; ++i){
//         if(i==start || nums[i-1] !== nums[i]){
//             for(let subset of kSum(nums, target, start+1, k-1)){
//                 res.push([nums[i]]);
//                 res[res.length-1].push(subset);
//             }            
//         }
//     }
//     return res;
// }

// const twoSum = (nums, target, start) => {
//     let res = [];
//     let lo=start; let hi=nums.length-1;
//     while(lo < hi){
//         let currSum = nums[lo] + nums[hi];
//         if(currSum < target || (lo > start && nums[lo] == nums[lo-1]))
//             ++lo;
//         else if(currSum > target  || (hi < nums.length-1 && nums[hi] == nums[hi+1]))
//             --hi;
//         else
//             res.push([nums[lo++],nums[hi--]]);
//     }
//     return res;
// }

// let arr = [1,0,2,3]
// arr.sort();
// //console.log(twoSum(arr, 3,0));

// console.log(sum([2,2,2,2],8,0,4));