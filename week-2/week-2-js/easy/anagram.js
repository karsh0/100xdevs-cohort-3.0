/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


//count the letters in the string and return true if equal else false
function isAnagram(str1, str2) {
  let s1 = str1.split();
  let s2 = str2.split();
  if(s1 == s2) return true;
  else return false;
}

module.exports = isAnagram;
