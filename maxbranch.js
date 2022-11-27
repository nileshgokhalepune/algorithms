const solution = (arr) => {
    let memo = {};
    memo["Left"] = 0;
    memo["Right"] = 0;
    let val = recurseArraY(arr,0,memo);
    return val;
    // console.log(memo["Left"]);
    // console.log(memo["Right"]);
    // if(memo["Left"] < memo["Right"])
    //     return "Right";
    // else if(memo["Left"] > memo["Right"])
    //     return "Left";
    // else return "Equal";
};

const recurseArraY = (arr, start, memo) => {
    if(start >= arr.length) return 0;
    let sumLeft  =arr[start] + recurseArraY(arr, 2 *start +1, memo);
    let sumRight = arr[start] + recurseArraY(arr, 2 *start +2, memo);
    memo["Left"] = sumLeft;//arr[start] + recurseArraY(arr, 2 *start +1, memo);
    memo["Right"] = sumRight;// arr[start] + recurseArraY(arr, 2 *start +2, memo);
    if(sumLeft > sumRight) return sumLeft;
    else return sumRight;
}

console.log(solution( [1, 10, 5, 1, 0, 6]));

//  let memo = {};
//  memo["Left"] = 0;

//  console.log(memo[0]);
//  console.log(memo["Left"]);
//  memo["Left"]++;
//  console.log(memo["Left"]);

