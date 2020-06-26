#recursion

def double(n):
  if n == 0:
    return 0
  return double(n - 1) + 2

print(double(4))


def exponentiate(b, e):
  if (e == 0): return 1

  return exponentiate(b, e - 1) * b

print(exponentiate(4, 3))