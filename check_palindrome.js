

let str = "naman";

let str1 = "";
for (let i = str.length - 1; i >= 0; i--) {
	str1 += str[i];
}
if (str1 == str) {
	console.log("Palindrome");
} else {
	console.log("Not a Palindrome");
}