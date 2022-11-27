findMedianSortedArrays = (nums1, nums2) => {
    if(nums1.length > nums2.length){
        return findMedianSortedArrays(nums2, nums1);
    }

    let l1 = nums1.length;
    let l2 = nums2.length;
    let low = 0;
    let high = l1;

    while(low < high)
    {
        let partitionX = Math.floor((low + high)  /2);
        let partitionY = Math.floor(((l1+l2+1)/2) - partitionX);

        let maxX = partitionX >=high ? Number.MAX_VALUE : nums1[partitionX];
        let minX = partitionX <=0 ? Number.MAX_VALUE : nums1[partitionX -1];
        let maxY = partitionY >=high ? Number.MAX_VALUE : nums2[partitionY];
        let minY = partitionY <=0 ? Number.MAX_VALUE : nums2[partitionY -1];

        if(minX < maxY && minY < maxX){
            //found;
        } else if(minY > maxX){
            low++;
        }else {
            high--;
        }
    }
}

findMedianSortedArrays([1,3],[2]);