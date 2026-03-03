class Solution {
public:
    char findKthBit(int n, int k) {
        // Recursive function to find the k-th bit in S_n
        function<char(int, int)> helper = [&](int n, int k) -> char {
            if (n == 1) return '0';  // Base case, S1 is "0"
            
            int len = (1 << n) - 1;  // Length of Sn
            int mid = len / 2 + 1;   // Middle position in Sn

            if (k == mid) {
                return '1';  // Middle bit is always '1'
            } else if (k < mid) {
                return helper(n - 1, k);  // If k is in the first half, recurse on Sn-1
            } else {
                // If k is in the second half, recurse on Sn-1 and invert the result
                return helper(n - 1, mid - (k - mid)) == '0' ? '1' : '0';
            }
        };

        return helper(n, k);  // Start recursion
    }
};
