let x = 2;
let result;

if (typeof x === "number") {
    result = `${x} - чилсо`;    
} else if (typeof x === "string") {
    result = `${x} - строка`;
} else if (typeof x === "boolean") {
    result = `${x} - логический тип`;
} else {
    result = `Тип ${x} не определён`;
}
console.log(result);
