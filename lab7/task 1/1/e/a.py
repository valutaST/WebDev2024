def min(a, b, c, d):
    if a > b:
        x = b
    else:
        x = a

    if c > d:
        y = d
    else:
        y = c

    if x > y:
        return y
    return x


a = input().split(" ")

print(min(int(a[0]), int(a[1]), int(a[2]), int(a[3])))