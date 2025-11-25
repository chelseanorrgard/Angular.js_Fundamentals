function castValue(value: unknown): string | number {
    if (typeof value === 'string') {
        let stringValue: string = value as string;
        return stringValue;
    } else if (typeof value === 'number') {
        let numberValue: number = value as number;
        return numberValue;
    } else {
        return "Sorry, this is an unsupported type";
    }
}

// Test
console.log(castValue("Word"));  // Output: Word
console.log(castValue(525));     // Output: 525
console.log(castValue(false));   // Output: Sorry, this is an unsupported type
