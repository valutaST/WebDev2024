def stepen(b, n):
    c = 1.0
    for i in range(n):
        c *= b
    return c


a = input().split(" ")


print(stepen(float(a[0]), int(a[1])))