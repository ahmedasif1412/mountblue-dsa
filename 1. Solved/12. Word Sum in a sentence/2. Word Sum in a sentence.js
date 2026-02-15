/**
 * Question.1 -  Calculate the sum of a sentence based on letter values with special rules for capitalization.
The problem is:

Each letter has a value (a/A=1, b/B=2, c/C=3, ... z/Z=26)
If ALL letters in a word are uppercase, double that word's sum, otherwise, just add the normal sum

Your example: "abc ABC Abc"

"abc" = 1+2+3 = 6
"ABC" = (1+2+3) × 2 = 12 (all caps, so doubled)
"Abc" = 1+2+3 = 6 (mixed case, normal sum)
Total = 24
 */
// Logic - Sum the letters for each words in a sentence individually using a variable i.e words = sArr[i] after the 1st loop of the nested for loop. Then check if that word contains all alphabetic letters i.e                   alpha = words.split("") and if that happens then double it i.e wordSum = wordSum * 2 or else just added to the main sum i.e sum += wordSum
function letterSum(s) {
  let sArr = s.split(" "); //1st split the sentence into array of words;
  let sum = 0; //Initialize the main sum in which we will add the sum of the letters row-wise i.e word-wise
  for (let i = 0; i < sArr.length; i++) {
    let words = sArr[i]; //Now taking each word at a time just after the 1st for loop
    let wordSum = 0; //This is the row-wise sum i.e all the letters in a word
    //Now in the 2nd for loop we will check whether each character of the word is lowercase or uppercase. Irrespective of the lowercase or uppercase since a/A = 1 to z/Z = 26 so both upper and lower has same vlaue therefore just add all the char to the wordSum
    for (let char of sArr[i]) {
      if (/[A-Z]/.test(char)) {
        wordSum += char.charCodeAt(0) - 64; //uppercase then substract 64 since A = 65 to Z = 90
      } else if (/[a-z]/.test(char)) {
        wordSum += char.charCodeAt(0) - 96; //lowercase then substract 96 since A = 97 to Z = 122
      }
    }
    // but after adding all the char in the word check if that word contains all the uppercase, if so then multiple the wordSum by 2
    let alpha = words.split(""); // 1st convert that word to array since .every is an array method
    if (alpha.every((char) => /[A-Z]/.test(char))) {
      wordSum = wordSum * 2; //if all the char in that word is upper then multiple the wordsum by 2
    }
    sum += wordSum; //whether you multiple it by 2 or not add the wordsum to the main sum because this should be done word-wise
  }
  return sum; // return the sum
}

console.log(letterSum("abc ABC Abc")); //24
