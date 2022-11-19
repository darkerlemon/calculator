function add(a, b) {
    return Math.round(((a + b) + Number.EPSILON) * 100) / 100;
};

function subtract(a, b) {
    return Math.round(((a - b) + Number.EPSILON) * 100) / 100;
};

function multiply(a, b) {
    return Math.round(((a * b) + Number.EPSILON) * 100) / 100;
};

function divide(a, b) {
    return Math.round(((a / b) + Number.EPSILON) * 100) / 100;
};
function remainderF(a, b) {
    return Math.round(((a % b) + Number.EPSILON) * 100) / 100;
};

function operate (a, op, b) {
    return op(a, b);
};

const input = document.querySelector('.input');
const container = document.querySelector('.container');
const numberBtn = document.querySelectorAll('.numberBtn');
const operateBtn = document.querySelectorAll('.operateBtn');
const adder = document.querySelector('#add');
const equal = document.querySelector('#equals');
const subtracter = document.querySelector('#subtract');
const multiplier = document.querySelector('#multiply');
const divider = document.querySelector('#divide');
const clear = document.querySelector('#clear');
const allClear = document.querySelector('#allClear');
const decimal = document.querySelector('#decimal');
const remainder = document.querySelector('#remainder');
const minus = document.querySelector('#minus');

let displayValue = '';
let firstValue = '';
let secondValue = '';
function numberBtnClicked(e) { 
    input.textContent += e.target.textContent;
    displayValue = parseFloat(input.textContent);
    console.log(displayValue);
    return displayValue;}


function operateBtnClicked(e) {
    if (e.target === adder) {
    input.textContent += '+';
} else if (e.target === minus) {
    input.textContent = parseFloat(input.textContent) * -1;
} else if (e.target === subtracter) {
    input.textContent += '–';
} else if (e.target === multiplier) {
    input.textContent += 'x';
} else if (e.target === divider) {
    input.textContent += '/';
} else if (e.target === remainder) {
    input.textContent += '%';
} else if (e.target === decimal) {
    input.textContent += '.';
} else if (e.target === clear) {
    input.textContent = input.textContent.slice(0, -1);
} else if (e.target === equal && input.textContent.includes('+')) {
        let secondValue = parseFloat(input.textContent.split('+').pop());
        let firstValue = parseFloat(input.textContent.split('+')[0]);
        console.log(firstValue);
        console.log(secondValue);

        resultAdd = operate(firstValue, add, secondValue);
     console.log(resultAdd);
        input.textContent = resultAdd;
        return resultAdd;
}   else if (e.target === equal && input.textContent.includes('–')) {
        let secondValue = parseFloat(input.textContent.split('–').pop());
        let firstValue = parseFloat(input.textContent.split('–')[0]);
        console.log(firstValue);
        console.log(secondValue);
        
        resultAdd = operate(firstValue, subtract, secondValue);
     console.log(resultAdd);
        input.textContent = resultAdd;
        return resultAdd;
}   else if (e.target === equal && input.textContent.includes('x')) {
        let secondValue = parseFloat(input.textContent.split('x').pop());
        let firstValue = parseFloat(input.textContent.split('x')[0]);
        console.log(firstValue);
        console.log(secondValue);

        resultAdd = operate(firstValue, multiply, secondValue);
     console.log(resultAdd);
        input.textContent = resultAdd;
        return resultAdd;
}   else if (e.target === equal && input.textContent.includes('/')) {
        let secondValue = parseFloat(input.textContent.split('/').pop());
        let firstValue = parseFloat(input.textContent.split('/')[0]);
        console.log(firstValue);
        console.log(secondValue);
        if ( secondValue == 0){
            alert('that is naughty, it is undefined');
            window.location.reload();
        } else {
        resultAdd = operate(firstValue, divide, secondValue);
     console.log(resultAdd);
        input.textContent = resultAdd;
        return resultAdd;}
}   else if (e.target === equal && input.textContent.includes('%')) {
        let secondValue = parseFloat(input.textContent.split('%').pop());
        let firstValue = parseFloat(input.textContent.split('%')[0]);
        console.log(firstValue);
        console.log(secondValue);

        resultAdd = operate(firstValue, remainderF, secondValue);
     console.log(resultAdd);
        input.textContent = resultAdd;
        return resultAdd;
} else if (e.target === allClear) {
        window.location.reload();
}};


operateBtn.forEach(function(button) {
    button.addEventListener('click', operateBtnClicked);
});

numberBtn.forEach(function(button) {
    button.addEventListener('click', numberBtnClicked);
 });
