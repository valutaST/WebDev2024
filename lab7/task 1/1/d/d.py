n = int(input())
a = input().split(" ")
m = 0
for i in range(1, n):
    if int(a[i]) > int(a[i-1]):
        m += 1
print(m)