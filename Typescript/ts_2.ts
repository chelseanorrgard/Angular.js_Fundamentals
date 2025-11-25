function convertShoeSize(usSize: number): number {
    const offset = 33; // US to EU conversion
    return usSize + offset;
}

// Test 
console.log(convertShoeSize(8));  // Output: 41
console.log(convertShoeSize(10)); // Output: 43
