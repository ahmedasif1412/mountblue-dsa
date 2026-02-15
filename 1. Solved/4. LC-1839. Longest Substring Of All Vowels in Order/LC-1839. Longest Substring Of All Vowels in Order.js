// Note - word consists of combinatons of characters only made from 'a', 'e', 'i', 'o', and 'u'.
var longestBeautifulSubstring = function (word) {
  let maxLen = 0;
  let i = 0;
  const n = word.length;

  while (i < n) {
    // Start of a potential beautiful substring must begin with 'a'
    if (word[i] !== "a") {
      i++;
      continue; // The continue statement is the key here. It immediately jumps back to the beginning of the while loop and checks the condition while (i < n) again. It skips all the remaining code below it i.e below starting from let start = i; till the end, in that iteration untill it finds char "a" and then only it moves on to the ln.14 i.e let start = i; So, any other vowel that shows up before a will be ignored
    }

    // Track the current substring
    let start = i; //we need the starting value of i since i is increased as we move further in the string and tbh we have to once we find "a"
    let uniqueVowels = new Set([word[i]]);
    i++; // hence we have increased i i.e i++ in the very next line after storing that i str value in the Set.

    // Extend the substring while maintaining order
    // word[i] >= word[i - 1] in which i-1 was prev char i.e word[i] at ln.19 and i is the next char since we increase the value of i by 1 i.e i++ at ln.20. So, any vowel that doesn't follow the order this while loop will end and the if statement below it will be skipped as well and we go back to the while loop at ln.7
    while (i < n && word[i] >= word[i - 1]) {
      uniqueVowels.add(word[i]);
      i++; // Note that i i will ultimately arrive on the char of the string which is not supposed to be taken or may be it gets out of bounds of the string word.
    }

    // Check if we have all 5 vowels
    if (uniqueVowels.size === 5) {
      maxLen = Math.max(maxLen, i - start); //since we have already mentioned at ln.18 that i is increased as we move further in the string, i which then ultimately lies on the char of the string which is not supposed to be taken therefore we don't have to do i - start + 1 and only i - start which will give us the exact number of substring. Also, if there are number of "aeiou" patterns then one with the longest number of characters will be selected since we are using Math.max()
    }
  }

  return maxLen;
};
