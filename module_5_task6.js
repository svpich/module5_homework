let arr = [5, 8, "Hello", true];
let isSame = true;

for (const e of arr) {
    if (e !== arr[0]) {
        isSame = false;
        break;
    }
}
console.log(isSame);
