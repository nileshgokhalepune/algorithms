const maxArea = (height) =>{
    let length = height.length; 
    let left = 0;
    let right = length-1;
    let maxArea = 0;
    while(left < right)
    {
        maxArea = Math.max(maxArea, (right-left) * Math.min(height[left], height[right]));        
        if(height[left]< height[right])    
            left++;
        else right--;
    }
    
    return maxArea;
}

console.log( maxArea([1,2,1]));
console.log( maxArea([1,8,6,2,5,4,8,3,7]));
console.log( maxArea([3,9,3,4,7,2,12,6]));