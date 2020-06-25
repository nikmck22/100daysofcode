#While Loops

index = 0
names = ["bob", "josh", "harry"]

while index < len(names):
  name = names[index]
  print(name)
  index = index + 1


  total = 0
  v = 1

  while v <= 10:
    total = total + v
    v = v + 1
  print(total)


while True:
  a, b = int(input("a: ")), int(input("b: "))
  if a + b == 20:
    print("stopping loop")
    break
  else:
    print("a + b is equal to 20")