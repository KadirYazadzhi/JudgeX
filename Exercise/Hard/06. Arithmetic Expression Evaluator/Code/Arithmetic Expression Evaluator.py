def evaluate_expression(expression):
    try:
        return eval(expression)  
    except Exception as e:
        print(f"Error: {e}")
        return None

def main():
    expression = input()
    result = evaluate_expression(expression)
    if result is not None:
        print(result)

if __name__ == "__main__":
    main()
