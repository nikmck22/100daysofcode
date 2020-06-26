#parameters and arguments

import datetime as dt

# def add(a, b, c):
#   return a + b + c

# print(add(1, 2, 3))


def add(*numbers):
  total = 0
  for n in numbers:
    total += n
  return total

print(add(1,2,3,4,5))