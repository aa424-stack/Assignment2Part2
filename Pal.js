function isPalindrome(num) {
    var str = num.toString();
    var reversed = str.split('').reverse().join('');
    return str === reversed;
}

document.getElementById('Checkbtn').addEventListener('click', function() {
    var inputNum = document.getElementById('Inputnum').value;
var result = isPalindrome(inputNum);
document.getElementById('result').innerText = result ? inputNum + " is a palindrome." : inputNum + " is not a palindrome.";
});


