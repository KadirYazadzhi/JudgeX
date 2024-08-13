using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        string expression = Console.ReadLine();

        if (IsValidExpression(expression)) {
            Console.WriteLine("True");
        }
        else {
            Console.WriteLine("False");
        }
    }

    static bool IsValidExpression(string expression) {
        Stack<char> stack = new Stack<char>();

        foreach (char ch in expression) {
            if (IsOpeningBracket(ch)) {
                stack.Push(ch);
            }
            else {
                if (stack.Count == 0 || !IsValidPair(stack.Pop(), ch)) {
                    return false;
                }
            }
        }

        return stack.Count == 0;
    }

    static bool IsOpeningBracket(char ch) {
        return ch == '(' || ch == '{' || ch == '[';
    }

    static bool IsValidPair(char opening, char closing) {
        return (opening == '(' && closing == ')') ||
               (opening == '{' && closing == '}') ||
               (opening == '[' && closing == ']');
    }
}



