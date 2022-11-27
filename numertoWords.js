let digitsMap =  {}

digitsMap[0] = "Zero";
digitsMap[1] = "One";
digitsMap[2] = "Two";
digitsMap[3] ="Three";
digitsMap[4] = "Four";
digitsMap[5]= "Five";
digitsMap[6] = "Six";
digitsMap[7] ="Seven";
digitsMap[8]= "Eight";
digitsMap[9]= "Nine";
digitsMap[10] = "Ten";
digitsMap[11] = "Eleven";
digitsMap[12] = "Twelve";
digitsMap[13] = "Thirteen";
digitsMap[14] = "Fourteen";
digitsMap[15] = "Fifteen";
digitsMap[16] = "Sixteen";
digitsMap[17] = "Seventeen";
digitsMap[18] = "Eighteen";
digitsMap[19] = "Nineteen";
digitsMap[20] = "Twenty";
digitsMap[30] ="Thirty";
digitsMap[40] = "Forty";
digitsMap[50]= "Fifty";
digitsMap[60] = "Sixty";
digitsMap[70] ="Seventy";
digitsMap[80]= "Eighty";
digitsMap[90]= "Ninety";

let baseMap = {};
baseMap[1000000000] = "Billion";
baseMap[1000000] = "Million";
baseMap[1000] = "Thousand";
baseMap[100] = "Hundred";


const numToWordsConstantTime = (num) => {
    if(num == 0) return "Zero";
    let billion = parseInt(Math.floor(num / 1000000000));
    let million = parseInt(Math.floor(num / 1000000))
    let thousand = parseInt(Math.floor(num / 1000))
}

const numertoWodsUsingString = (num) => {
    let str ="";
    if(num == 0) return digitsMap[num];
    let base = 1;
    let copy = num;
    let ln=0;
    while (copy > 0){
        copy =  Math.floor(copy / 10);
        ln++;
    }
    while(ln > 1){
        base = base * 10;
        ln--;
    }
    // while(baseMap[base] === undefined){
    //     base = base / 10;
    // }
    return getUpToThreeDigits(num,base);
    
    // for(let i =0; i< copy.length; i++){
    //     if(digitsMap[copy[i]] != undefined)
    //     {
    //         str = digitsMap[copy[i]];
    //     }
    // }
}

const getUpToThreeDigits = (num,base) => {
    let str = getUpToTwoDigits(num).trim();
    if(str !== "") return str;
    if(Math.pow(10, num.toString().length-1) !== base){
        base = Math.pow(10, num.toString().length-1);
    }
    while(baseMap[base] === undefined){
        base = base / 10;
    }
    let leftPart = Math.floor(num/base);
    if(leftPart.toString().length <= 2){
        str += getUpToTwoDigits(leftPart,base).trim() + ' ' + baseMap[base];
    }else if(leftPart.toString().length > 2){
        str += getUpToThreeDigits(leftPart, base/10).trim() + ' ' + baseMap[base];
    }

    let rightPart = Math.floor(num % base);
    if(rightPart === 0) return str;
    if(rightPart.toString().length <= 2){
        str += ' ' + getUpToTwoDigits(rightPart,base);
    }
    else if(rightPart > 2) {
        str += ' ' + getUpToThreeDigits(rightPart, base/ 10);
    }
    return str;
}

const getUpToTwoDigits = (num, base) => {
    let copy = num.toString();
    if(digitsMap[num] !== undefined) return digitsMap[num] + ' ';
    if(copy.length == 2){
        let tees = copy[0] * 10; 
        return  digitsMap[tees] +' ' + digitsMap[copy[1]];
    }
    return "";
}


// for(let i=1000000000; i< 1001111111  ; i+=50){
//     console.log(numertoWodsUsingString(i)) 
// }

//console.log(numToWordsConstantTime(10));
console.log(numertoWodsUsingString(100000))
// console.log(numertoWodsUsingString(1900))
// console.log(numertoWodsUsingString(100000));
// console.log(numertoWodsUsingString(25942));
// //console.log(numertoWodsUsingString(21));
// //console.log(numertoWodsUsingString(1234567891));
// //console.log(numertoWodsUsingString(2147483647));
// //console.log(numertoWodsUsingString(1999999999999999));