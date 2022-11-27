using System;
using System.Collections;

public class SortLogs
{
    public void ReoderLogs(string[] logs)
    {
        Array.Sort(logs, new CustomComparer());
        Console.Write(logs);
    }

}

public class CustomComparer : IComparer
{
    public int Compare(object x, object y)
    {
        string xs = (string)x ;
        string ys = (string)y;
        string[] xSplit = xs.Split(' ',2);
        string[] ySplit = ys.Split(' ',2);
        
        bool isDigit1 = char.IsDigit(xSplit[1][0]);
        bool isDigit2 = char.IsDigit(ySplit[1][0]);

        if(!isDigit1 && !isDigit2){
            int cmp = xSplit[1].CompareTo(ySplit[1]);
            if(cmp!=0) return cmp;
            return xSplit[0].CompareTo(ySplit[0]);
        }
        if(!isDigit1 && isDigit2) return -1;
        else if(isDigit1 && !isDigit2) return 1;
        else return 0;
    }
}