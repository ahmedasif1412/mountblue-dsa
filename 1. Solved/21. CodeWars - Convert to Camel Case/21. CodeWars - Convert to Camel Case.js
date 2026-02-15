/** Source: www.codewars.com - Convert string to camel case
 *  Complete the method/function so that it converts dash/underscore delimited words into __camel casing__. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior" 
 */

function toCamelCase(words) {
  if (words.length === 0) return words;
  words = words.split(/[-_]/);
  let firstWord = words[0];
  //let firstWord = words[0].toLowerCase();//use this line of code to convert it into true camel case
  let rest = "";
  for (let i = 1; i < words.length; i++) {
    rest += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return firstWord + rest;
}

console.log(toCamelCase("the-stealth-programmer"));
console.log(toCamelCase("The_Stealth_deveLOPER"));
console.log(toCamelCase("The_Stealth-GENIUS"));
console.log(toCamelCase(""));
console.log(toCamelCase("A-B-C"));
