/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  if(str == alphabets) {
    return undefined;
  }
  const alphabetsArr = alphabets.split("");
  const strArr = str.split("");
  let firstItemIndex = alphabets.indexOf(str[0]);
  let missingLetter;
  // console.log(firstItemIndex);
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== alphabets[firstItemIndex]) {
      missingLetter = alphabets[firstItemIndex];
      break;
    }
    firstItemIndex++;
  }
  /*
  strArr.forEach(item => {
    // console.log('LOOP', item, alphabets[firstItemIndex]);
    if (item !== alphabets[firstItemIndex]) {
      // console.log('NOT MATCHED');
      missingLetter = alphabets[firstItemIndex];
    }
    firstItemIndex++;
  });*/
  return missingLetter;
}

console.log(fearNotLetter("abcdefghjklmno"));
