class Solution {
public:
    int bitwiseComplement(int n) {
        if(n==0)
        return 1;
        int m= n;
        int mask=0;
        while(m!=0){
            m= m>>1;
            mask= (mask<<1) | 1;
        }
        return (~n) & mask;
    }
};