let input = prompt("Введите значение:");
let num = +input;
let result;

if (!typeof num === "number" || isNaN(num)) {
    result = "Упс, кажется, вы ошиблись";
} else {
    result = num % 2 == 0 ? "Число четное" : "Число не четное";
}
console.log(result);
 
