using System;
using System.Collections.Generic;
using System.Text;

public class CompareRevisions{
    public int CompareVersion(string version1, string version2) {
        string[] s1 = version1.Split('.');
        string[] s2 = version2.Split('.');
        int s1Len = s1.Length;
        int s2Len = s2.Length;
        int max = Math.Max(s1Len, s2Len);
        for(int i =0; i < max; i++){
            int v1 = i < s1Len ? int.Parse(s1[i]) : 0;
            int v2 = i < s2Len ? int.Parse(s2[i]) : 0;
            if(v1 < v2) return -1;
            if(v1 > v2) return 1;
        }
        return 0;
    }
}