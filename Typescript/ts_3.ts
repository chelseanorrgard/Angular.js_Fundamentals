type ArrayValues = {
    sum: number;
    count: number;
}

function calcArray(numbers: number[]): ArrayValues {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    const count = numbers.length;

    return {
        sum,
        count
    };
}

// Test
const arrayNumbers: number[] = [1, 5, 5, 5, 6];
const test = calcArray(arrayNumbers);
console.log(`Sum: ${test.sum} & count: ${test.count}`); 