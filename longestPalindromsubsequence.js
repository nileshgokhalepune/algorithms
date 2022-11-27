var longestPalindromeSubseq = function(s) {
    let n = s.length;
    let table = new Array(n);
    for(let i=0; i< n; i++){
        table[i] = new Array(n);
    }
    let maxLenght = 1;
    for(let i=0; i < n; ++i){
        table[i][i] = true;
    }
    let start =0;
    let str = "";
    for(let i=0; i < n; i++){
        str += '\t' + s[i];
    }
    str += '\n';
    for(i=0; i < table.length; i++){
        str += s[i];
        for(j=0; j<table[0].length; j++){
            if(table[i][j] === undefined){
                str += '\t';
            }else{
                str += '\t' + table[i][j] + '\t';
            }
        }
        str += '\n';
    }
    console.log(str);
    // for(let i=0;i < n-1; i++){
    //     if(s[i] == s[i+1]){
    //         table[i][i+1] = true;
    //         start =i;
    //         maxLenght = 2;
    //     }
    // }
};

//console.log(longestPalindromeSubseq('bbbab'));


console.log(longestPalindromeSubseq('fababcdeaq'));