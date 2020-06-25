#Iterables

list = [1,2,3,4,5]
tuple = (2,7,8,9,10)
string = "hello world"

# for elem in list:
#   print(elem)

list_iterator = iter(list)

while True:
  try:
    next_elem = next(list_iterator)
    print(next_elem)
  except StopIteration:
    break