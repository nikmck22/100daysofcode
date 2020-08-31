function truthCheck(collection, pre) {
  return collection.every(function(item) {
    return item.hasOwnProperty(pre) && Boolean(item[pre]);
  });
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa"}, {"user": "Po", "sex": "female"}], "sex"));
