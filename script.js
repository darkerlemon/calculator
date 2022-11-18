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

const input = document.querySelector('.input');
const container = document.querySelector('.container');
const numberBtn = document.querySelectorAll('.numberBtn');
const operateBtn = document.querySelectorAll('.operateBtn');
const adder = document.querySelector('#add');
const equal = document.querySelector('#equals');

let displayValue = '';
let secondValue = '';
function numberBtnClicked(e) { 
    input.textContent += e.target.textContent;
    displayValue = parseFloat(input.textContent);
    console.log(displayValue);
    return displayValue;}


function operateBtnClicked(e) {
    if (e.target === adder) {
    input.textContent += '+'}
    else if (e.target === equal) {
        resultAdd = operate(displayValue, add, displayValue);
     console.log(resultAdd);
        input.textContent = resultAdd;
        return resultAdd;
    } 
}


operateBtn.forEach(function(button) {
    button.addEventListener('click', operateBtnClicked);
});

numberBtn.forEach(function(button) {
    button.addEventListener('click', numberBtnClicked);
 });
