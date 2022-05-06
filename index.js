function reverseString(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}
function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

/* 
  Create a new function to reverse the word.
  Split the word into an array in order to reverse it.
  Once it's reverse, join it back together to be a word.
  Return the reversed word.

  Create a function to compare the reversed word to the word.
  Since it's true or false, just return the result.
*/

/*
We need to check to see if the word is a palindrome. To do that, we need to reverse the word and compare it to the original word.
If it is, return true. If it's not, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
