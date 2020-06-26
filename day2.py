# def count_vowels(s, i = 0):
#   if (i == len(s)): return 0
  
#   c = s[i]
#   if c in 'aeiou':
#     return count_vowels(s, i + 1) + 1
#   return count_vowels(s, i + 1)
# print(count_vowels("hello"))


def digit_sum(n):
  if n == 0: return 0
  return digit_sum(n//10) + n % 10

print(digit_sum(345))