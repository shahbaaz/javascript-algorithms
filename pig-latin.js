/*
Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(str[0])) {
    return str + "way";
  }
  const strArr = str.split("");
  const finalArr = strArr.slice();
  let flag = false;

  strArr.forEach((element, index) => {
    if (!vowels.includes(element) && !flag) {
      finalArr.shift();
      finalArr.push(element);
    } else if (vowels.includes(element)) {
      flag = true;
    }
    
  });

  const finalStr = finalArr.join("") + "ay";
  return finalStr;
}

console.log(translatePigLatin("consonant"));
