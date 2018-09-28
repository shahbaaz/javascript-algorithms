/**
 * Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals (http://www.mathsisfun.com/roman-numerals.html) answers should be provided in upper-case.
 */

function convertToRoman(num) {
  const coreRomanArray = [1,5,10,50,100,500,1000];
  const numString = String(num);
  // console.log(numString);
  const numArray = numString.split("");
  // console.log(numArray);
  for (let i = 0; i < numArray.length; i++) {
    numArray[i] = numArray[i] + zeroes(numArray.length - 1 - i);
  }
  console.log('NUMBERS ARRAY', numArray);

  const romanArray = numArray.map(item => {
    const numberItem = Number(item);
    if (numberItem === 0) { return ''; }
    if (coreRomanArray.includes(numberItem)) {
      return coreRoman(numberItem);
    } else {
      console.log('NUMBER ITEM NOT CORE', numberItem);
      if (numberItem % 1000 === 0) {
        return getRepeatChars('M', numberItem/1000);
      }

      if (numberItem === 900) {
        return 'CM';
      }

      if (numberItem === 400) {
        return 'CD';
      }

      if (numberItem % 100 === 0) {
        if (numberItem > 500) {
          return 'D' + getRepeatChars('C', (numberItem % 500)/100);
        } else {
          return getRepeatChars('C', numberItem / 100);
        }
      }

      if (numberItem === 90) {
        return 'XC';
      }

      if (numberItem === 40) {
        return 'XL';
      }

      if (numberItem % 10 === 0) {
        if (numberItem > 50) {
          return 'L' + getRepeatChars('X', (numberItem % 50)/10);
        } else {
          return getRepeatChars('X', numberItem / 10);
        }
      }

      if (numberItem === 9) {
        return 'IX';
      }

      if (numberItem === 4) {
        return 'IV';
      }

      if (numberItem > 5) {
        return 'V' + getRepeatChars('I', numberItem % 5);
      } else {
        return getRepeatChars('I', numberItem);
      }
    }
  });

  console.log('ROMAN NUMBERS ARRAY', romanArray);
  return romanArray.reduce((acc, cur) => acc + cur);
}
 
console.log('FINAL RESULT', convertToRoman(4068));

function zeroes(num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += '0';
  }
  return result;
}

 // console.log("ZEROES", zeroes(3));

function getRepeatChars(char, num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += char;
  }
  return result;
}

 // console.log('REPEAT CHARS', getRepeatChars('M', 2));

function coreRoman(num) {
  switch (num) {
    case 1:
      return 'I';
      break;
    case 5:
      return 'V';
      break;
    case 10:
      return 'X';
      break;
    case 50:
      return 'L';
      break;
    case 100:
      return 'C';
      break;
    case 500:
      return 'D';
      break;
    case 1000:
      return 'M';
      break;
    default:
    return false;
      break;
  }
}
