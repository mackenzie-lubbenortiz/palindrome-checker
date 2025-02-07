const input = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function checkForPalindrome() {
if (input.value === "") {
  return alert("Please input a value");
  return;
} 
const cleanInput = input.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
const reverseInput = cleanInput.split("").reverse().join("");
if (cleanInput === reverseInput) {
  result.innerHTML = `${input.value} is a palindrome!`;
} else {
  result.innerHTML = `${input.value} is not a palindrome`;
}
}
checkButton.addEventListener("click", checkForPalindrome);
