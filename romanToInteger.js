let map  = new Map();
map.set("I", 1);
map.set("V", 5);
map.set("X", 10);
map.set("L", 50);
map.set("C", 100);
map.set("D", 500);
map.set("M", 1000);
const romanToInteger = (roman) => {
    let integer = 0;
    let len = roman.length;
    for(let  i=0; i <len; i++){
        let current = map.get(roman[i]);
        let next;
        if( (i+1) >= len)
            next = map.get(roman[i]);
        else 
            next = map.get(roman[i+1]);

        if(current < next) {
            integer += (next -current);
            i++;
            continue;
        } 
        integer += current;
    }
    return integer;
}


console.log(romanToInteger("XXX"));
// console.log(romanToInteger("XCIX"));
// console.log(romanToInteger("IX"));
// console.log(romanToInteger("IV"));
// console.log(romanToInteger("XXVII"));
// console.log(romanToInteger("MCMXCIV"));