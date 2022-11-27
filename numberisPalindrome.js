const isPalindrome = (x) => {
    if(x+x < 0) return false;
    let original = x;
    let copyOfX = x;
    let ln=0;
    while(original >0){
        original = Math.floor(original /10);
        ln++;
    } 
    let len = ln;
    let revNum =0;
    while(x > 0) {
        let base =1;
        for(let i =base; i < ln; i++){
            base = base  * 10;
        }
        revNum = revNum + base * (x % 10);
        x = Math.floor( x/10);
        ln--;
    }
    return revNum == copyOfX;
}

// console.log(isPalindrome(121)); //True
// console.log(isPalindrome(-121)); //False
// console.log(isPalindrome(12021));// true;
console.log(isPalindrome(1000021));// False;