class Solution {
public:
    int minimumDeletions(string s) {
        int a_count = 0, b_count = 0, min_deletions = s.length();
        
        for (char c : s) {
            if (c == 'a') {
                a_count++;
            }
        }
        
        min_deletions = a_count;
        
        for (char c : s) {
            if (c == 'a') {
                a_count--;
            } else {
                b_count++;
            }
            min_deletions = min(min_deletions, a_count + b_count);
        }
        
        return min_deletions;
    }
};