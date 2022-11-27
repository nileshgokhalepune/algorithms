using System.Collections.Generic;
using System.Linq;
public class UniqueuChar
{
    public int FirstUniqueChar(string s){
        Dictionary<char, int>  chars  =new Dictionary<char, int>();
        for(int i=0; i< s.Length; i++){
            if(!chars.ContainsKey(s[i])) {
                chars.Add(s[i], i);
            }else{
                chars[s[i]] = -1;
            }
        }
        
        int indx = int.MaxValue;
        foreach(var kv in chars){
            if(kv.Value != -1 && kv.Value < indx){
                indx = kv.Value;
            }
        }
        return indx;
    }
}