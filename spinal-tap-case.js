/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  console.log(str.split(/[ _]/));
  // const newStr = str.split(/[ _]/).map(item => item.toLowerCase()).join('-');
  const arr = str.split(/[ _]/);
  const newArr = [];
  // console.log('NEW STR ARRAY', newStr);
  arr.forEach(element => {
    console.log('ELEMENT', element);
    const updatedElement = element.split('').map((item, index) => {
      let updatedItem = item;
      if (/[A-Z]/.test(item) && index !== 0) {
         updatedItem = '-' + item;
      } 
      return updatedItem.toLowerCase();
    });
    newArr.push(updatedElement.join(''));
  });

  console.log('NEW ARR', newArr);
  return newArr.join('-');

  // return newStr.join('-');
  // return newStr;
}

// console.log(spinalCase('The_Andy_Griffith_Show'));
// console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("AllThe-small Things"));
