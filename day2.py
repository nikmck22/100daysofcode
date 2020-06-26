#return vs. void functions

def reverse(s):
  new_str = ""
  for i in range(len(s)):
    new_str += s[len(s) - i - 1]
  return new_str

print(reverse("1234"))