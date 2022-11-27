using System.Collections.Generic;

public class MinimumWindow
{
    public string minWindow(string s, string t)   
    {
        int sLen = s.Length;
        int tLen = t.Length;
        Dictionary<char, int> dict = new Dictionary<char, int>();
        foreach(char c in t){
            if(!dict.ContainsKey(c))
            {
                dict.Add(c, 1);
            }else{
                dict[c]++;
            }
        }

        Dictionary<char,int> windowCount = new Dictionary<char, int>();
        int[] ans = new int[]{-1,0,0};
        int l=0, r=0, formed=0, required = dict.Count;
        while(r < sLen)
        {
            char c = s[r];
            if(!windowCount.ContainsKey(c)){
                windowCount.Add(c,1);
            }else{
                windowCount[c]++;
            }

            if(dict.ContainsKey(c) && dict[c] == windowCount[c]){
                formed++;
            }

            while(l <= r && formed == required){
                char lc = s[l];
                if(ans[0] == -1 || r-l+1 < ans[0]){
                    ans[0] = r-l+1;
                    ans[1] = l;
                    ans[2] = r;
                }
                windowCount[lc]--;
                if(dict.ContainsKey(lc) && windowCount[lc] < dict[lc]){
                    formed--;
                }
                l++;
            }
            r++;
        }
        return ans[0] == -1 ? "" : s.Substring(ans[1], ans[2]-ans[1]+1);
    }
}