function castValue(value) {
    if (typeof value === 'string') {
        let stringValue = value;
        return stringValue;
    }
    else if (typeof value === 'number') {
        let numberValue = value;
        return numberValue;
    }
    else {
        return "Sorry, this is an unsupported type";
    }
}
// Test
console.log(castValue("Word")); // Output: Word
console.log(castValue(525)); // Output: 525
console.log(castValue(false)); // Output: Sorry, this is an unsupported type
