const getCharMap = () => {
    let s = "abcdefghijklmnopqrstuvwxyz";
    let map = new Map();
    for(let m in s){
        map.set(s[m], s[m].charCodeAt(0));
    }
    return map;
}
const getHashCode = (pattern, map) => {
    let code =0;
   for(let c of pattern){
       code = code + map.get(c);
   }
   return code;
}
const strStr = (haystack, needle) =>{
    let m = getCharMap();
    let hCode = getHashCode(needle,m);
    let bci =0;
    let i = 0;
    let code = 0;
    while(i < haystack.length)
    {
        code = code + m.get(haystack[i]);
        if(((i-bci) === (needle.length-1)))
        {
            if(code == hCode)return bci;
            code = code - m.get(haystack[bci]);
            bci++;
            i++;
        }else {
            i++;
        }
    }
    return -1;
}

// console.log(strStr("abcabcd","abc"));
// console.log(strStr("hello", "ll"));
// console.log(strStr("aaaaa", "bba"));
// console.log(strStr("helloworld", "ld"));
// console.log(strStr("mississippi", "issipi"));
// console.log(strStr("a", "a"));
// console.log(strStr("aaa", "aaaa"));
// console.log(strStr("mississippi", "issip"));
console.log(strStr("mississippi", "pi"));

