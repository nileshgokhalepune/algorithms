let map  = new Map();

map.set(1000,"M");
map.set(900,"CM");
map.set(500,"D");
map.set(400,"CD");
map.set(100,"C");
map.set(90,"XC");
map.set(50, "L");
map.set(40,"XL");
map.set(10,"X");
map.set(9,"IX")
map.set(5, "V");
map.set(4,"IV")
map.set(1,"I");
let numMap= new Map();
const integerToRoman = (x) => {
    let result = ""
    let copy = x;
    for(let m of map){
        let numberOfNumerals = Math.floor(copy / m[0]);
        if(numberOfNumerals !== 0){
            result += m[1].repeat(numberOfNumerals);
        }
        copy = copy % m[0];
    }
    return result;
}

//base case
//console.log(integerToRoman(1));
//console.log(integerToRoman(5));
//console.log(integerToRoman(12));
console.log(integerToRoman(13));
console.log(integerToRoman(14));
console.log(integerToRoman(1601));

// console.log(arr.sort());
// console.log(arr.length);
// console.log(arr[arr.length-1]);