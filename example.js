let adblock = require("./adblock.js");
adblock = new adblock(true, true) // Use the built in list and get the most up to date list from the github

adblock.addSite("https://google.com", "exact"); // Add your own sites if youd like
console.log(adblock.test("https://google.com"));// true

adblock.addSite("tiktok.com", "include");
console.log(adblock.test("https://tiktok.com"));// true

adblock.addSite("somesite") // Default detection mode is exact
console.log(adblock.test("http://somesite.com")); // false, didnt match somesite exactally

console.log(adblock.test("https://knowAdProvider.ads")) // false, registered in the built in lists