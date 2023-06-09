let arr = [5, 8, 0, 6,"Hello", true];

let evenNumberCount = 0;
let oddNumberCount = 0;
let zeroNumberCount = 0;

for (const num of arr) {
    if (typeof num === "number" && !isNaN(num)) {
        if (num == 0) {
            zeroNumberCount++;
        } else if (num % 2 == 0) {
            evenNumberCount++;
        } else {
            oddNumberCount++;
        }
    }
}
console.log("Количество нулей: " + zeroNumberCount);
console.log("Количество четных чисел: " + evenNumberCount);
console.log("Количество нечетных чисел: " + oddNumberCount);
