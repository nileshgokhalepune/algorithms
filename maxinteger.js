const solution = (numbers) => {
    if(!numbers || numbers.length === 0) return 0;
    let maxNum =Number.MIN_VALUE;
    for(let i=0; i< numbers.length; i++){
        if(maxNum < numbers[i]) 
            maxNum = numbers[i];
    }
    return maxNum;
};

console.log(solution([1,2,4]));