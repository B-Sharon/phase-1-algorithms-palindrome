function isPalindrome(word) {
  // Write your algorithm here

  //iterate through the word from beginning to the middle
  for(let i = 0; i < word.length / 2; i++){
    if(word[i] !== word[word.length - 1 - i]){
      return false
    }
  }
    //return true if the word is a palindrome
    return true
  


}

/* 
  Add your pseudocode here
  For loop is used to iterate over each word from the beginning to the middle of the string.
  If the first letter is the same as the last letter and so on until we reach the middle then it will return true, indicating that the word is a palindrome,
  If any of the letters don't match then it returns false
*/

/*
  Add written explanation of your solution here
  A palindrome is a word that is spelled the same forward and backward.
  This program checks whether the word is a palindrome, if it is then it logs true on the console, if it is not then it logs false.
  The function isPalindrome starts by iterating through the word from the beginning to the middle using the for loop that runs from index 0 to half of the world's length.
  Inside the loop it compares, it compares each character at the current index with the corresponding character from the end of the word. If the characters are not equal, it immediately returns false, indicating that the word is not a palindrome.
  If the loop completes without finding any unequal characters, it means that the word is a palindrome and thus returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
