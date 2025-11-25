function printInfo(name, occupation, wage) {
    const firstLetter = occupation[0].toLowerCase();
    const article = ['a', 'e', 'i', 'o', 'u'].includes(firstLetter) ? 'an' : 'a';
    return `Hey, ${name}. You are ${article} ${occupation} and your hourly wage is ${wage} dollars.`;
}
// Test
console.log(printInfo("Sam", "Engineer", 25));
console.log(printInfo("Lucy", "Doctor", 65));
