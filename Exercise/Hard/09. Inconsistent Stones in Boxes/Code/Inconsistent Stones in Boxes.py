def find_inconsistent_box():
    for i in range(1, 1001):
        stones = 0  
        for j in range(1, 1001):
            if i == j:
                stones += i  
        if stones != i:
            return i  

    return -1  

inconsistent_box = find_inconsistent_box()
print(inconsistent_box)

