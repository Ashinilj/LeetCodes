class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> ans;
        unordered_map<string, vector<string>> wordMap;
        for(string s: strs){
            string word = s;
            sort(word.begin(), word.end());
            wordMap[word].push_back(s);
        }

        for(auto &it: wordMap){
            ans.push_back(it.second);
        }
        return ans;
    }
};