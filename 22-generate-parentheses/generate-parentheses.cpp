class Solution {
public:
    void backtrack(int open, int close, string curr, int n, vector<string> &ans){
        //base case
        if(curr.size() == 2 * n) {
            ans.push_back(curr);
            return ;
        }

        //the number of open brackets will be less than n
        if(open < n){
            backtrack(open + 1, close, curr + "(", n, ans);
        }

        //the number of close brackets cannot be more than open
        if(close < open){
            backtrack(open, close + 1, curr + ")", n, ans);
        }
    }
    vector<string> generateParenthesis(int n) {
        vector<string> ans;
        backtrack(0, 0, "", n, ans);
        return ans;
    }
};