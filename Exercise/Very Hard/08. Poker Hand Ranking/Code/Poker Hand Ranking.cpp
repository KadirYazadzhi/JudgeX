#include <iostream>
#include <vector>
#include <string>
#include <cstring>
#include <algorithm>
using namespace std;

int get_face(string& c)
{
  if (c.length() == 2)
  {
    if (c[0] >= '2' && c[0] <= '9')
      return c[0] - '0';
    else if (c[0] == 'J')
      return 11;
    else if (c[0] == 'Q')
      return 12;
    else if (c[0] == 'K')
      return 13;
    else if (c[0] == 'A')
      return 1;
  }
  else
    return 10;
  return 0;
}

int get_suit(string& c)
{
  switch (c.back())
  {
    case 'h':
      return 3;
    case 'd':
      return 2;
    case 's':
      return 1;
    case 'c':
      return 0;
  }
  return 0;
}

string pokerHandRanking(vector<string> hand) {
  int face_count[14];
  int suit_count[4];
  
  vector<pair<int, int>> face;
  vector<pair<int, int>> suit;
  
  memset(face_count, 0, sizeof(face_count));
  memset(suit_count, 0, sizeof(suit_count));
  
  for (int i=0; i<hand.size(); i++)
  {
    int tface = get_face(hand[i]);
    int tsuit = get_suit(hand[i]);
    
    face_count[tface]++;
    suit_count[tsuit]++;
  }
  
  for (int i=0; i<14; i++)
  {
    if (face_count[i] > 0) face.push_back(pair<int, int>(face_count[i], i));
  }
  
  for (int i=0; i<4; i++)
  {
    if (suit_count[i] > 0) suit.push_back(pair<int, int>(suit_count[i], i));
  }
  
  auto x = [](const pair<int,int> &a, const pair<int,int> &b)
   {
     return a.first > b.first;
   };
  sort(face.begin(), face.end(), x);
  sort(suit.begin(), suit.end(), x);

  if (face.size() == 2)
  {
    if (face[0].first == 4)
      return "Four of a Kind";
    else
      return "Full House";
  }
  else if (face.size() == 3)
  {
    if (face[0].first == 3)
      return "Three of a Kind";
    else
      return "Two Pair";
  }
  else if (face.size() == 4)
  {
    return "Pair";
  }
  else if (face.size() == 5)
  {
    bool is_straight = (face[4].second - face[0].second) == 4;
    bool is_straight_s = face[0].second == 1 && face[1].second == 10;
    
    if (suit.size() == 1)
    {
      if (is_straight_s)
        return "Royal Flush";
      else if (is_straight)
        return "Straight Flush";
      else
        return "Flush";
    }
    else
    {
      if (is_straight || is_straight_s)
        return "Straight";
      else
        return "High Card";
    }
  }
  
  return ""; 
}

int main() {
  vector<string> hand;
  string card;

  for (int i = 0; i < 5; ++i) {
    cin >> card;
    hand.push_back(card);
  }

  string result = pokerHandRanking(hand);
  cout << result << endl;

  return 0;
}

int main() {
  vector<string> hand;
  string card;

  for (int i = 0; i < 5; ++i) {
    cin >> card;
    hand.push_back(card);
  }

  string result = pokerHandRanking(hand);
  cout << result << endl;

  return 0;
}