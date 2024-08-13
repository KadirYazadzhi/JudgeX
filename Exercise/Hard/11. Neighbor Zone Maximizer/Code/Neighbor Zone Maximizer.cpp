#include <iostream>
#include <string>
#include <vector>

using namespace std;

int maxZone(vector<vector<string>>& matrix) {
    int rows = matrix.size();
    if (rows == 0) return 0;
    int cols = matrix[0].size();
    if (cols == 0) return 0;

    vector<vector<bool>> visited(rows, vector<bool>(cols, false));
    int maxCount = 0;

    auto isValid = [&](int x, int y, const string& target) {
        return x >= 0 && x < rows && y >= 0 && y < cols && !visited[x][y] && matrix[x][y] == target;
    };

    auto dfs = [&](int x, int y, const string& target) {
        vector<pair<int, int>> stack;
        stack.push_back({x, y});
        int count = 0;
        while (!stack.empty()) {
            auto [cx, cy] = stack.back();
            stack.pop_back();
            if (visited[cx][cy]) continue;
            visited[cx][cy] = true;
            count++;
            int dx[] = {-1, 1, 0, 0};
            int dy[] = {0, 0, -1, 1};
            for (int k = 0; k < 4; ++k) {
                int nx = cx + dx[k];
                int ny = cy + dy[k];
                if (isValid(nx, ny, target)) {
                    stack.push_back({nx, ny});
                }
            }
        }
        return count;
    };

    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            if (!visited[i][j]) {
                int zoneSize = dfs(i, j, matrix[i][j]);
                if (zoneSize > maxCount) {
                    maxCount = zoneSize;
                }
            }
        }
    }

    return maxCount;
}

int main() {
    vector<vector<string>> matrix;
    string line;
    while (getline(cin, line)) {
        if (line.empty()) break;
        vector<string> row;
        size_t pos = 0;
        string token;
        while ((pos = line.find(" ")) != string::npos) {
            token = line.substr(0, pos);
            row.push_back(token);
            line.erase(0, pos + 1);
        }
        row.push_back(line);  
        matrix.push_back(row);
    }

    int result = maxZone(matrix);
    cout << result << endl;

    return 0;
}
