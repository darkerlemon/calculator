function add(a, b) {
    return a + b;
};
console.log(add(5, 6));

function subtract(a, b) {
    return a - b;
};
console.log(subtract(6, 5));

function multiply(a, b) {
    return a * b;
};
console.log(multiply(5, 6));

function divide(a, b) {
    return a / b;
};
console.log(divide(5, 6));

function operate (a, op, b) {
    return op(a, b);
}
console.log(operate(4, add, 7));