using System.Collections.Generic;
using System.Text;

public class FrequentWord{    
    public string MostCommonWord(string paragraph, string[] banned) {
        Dictionary<string, int> frequency = new Dictionary<string, int>();
        HashSet<string> hash = new HashSet<string>(banned);
        for(int i=0; i< paragraph.Length; i++){
            StringBuilder sb = new StringBuilder();
            while(i <= paragraph.Length-1 && ((paragraph[i] >= 'a' && paragraph[i] <= 'z') || (paragraph[i] >='A' && paragraph[i] <= 'Z'))){
                sb.Append(paragraph[i]);
                i++;
            }
            if( hash.Contains(sb.ToString().ToLower())){
                continue;
            }
            if(!frequency.ContainsKey(sb.ToString().ToLower())){
                frequency.Add(sb.ToString().ToLower(),1);
            }else {
                frequency[sb.ToString().ToLower()]++;
            }
        }
        int max = int.MinValue;
        string str = "";
        foreach(var kv in frequency){
            if(kv.Value > max){
                max = kv.Value;
                str = kv.Key;
            }
        }
        
        return str;
    }
}