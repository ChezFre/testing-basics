const reverse = (word) => {
  if (typeof word !== "string") throw new Error("reverse requires a word");
  return word.split("").reverse().join("");
};

const isPalindrome = (word) => {
  if (typeof word !== "string") throw new Error("isPalindrome requires a word");
  return reverse(word.toLowerCase()) === word.toLowerCase();
};

export { reverse, isPalindrome };
