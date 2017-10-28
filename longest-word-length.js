function findLongestWord(str) {
  var arr = str.split(' ')
  var lengthArr = []
  for (var i = 0; i < arr.length; i++) {
    lengthArr.push(arr[i].length)
  }
  return getMaxOfArray(lengthArr);
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

findLongestWord('Lorem ipsum dolor sit amet, consectetur adipiscing elit')
