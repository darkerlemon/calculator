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
       if (input.textContent.includes('+')) {
         let secondValue = parseFloat(input.textContent.split('+').pop());
         let firstValue = parseFloat(input.textContent.split('+')[0]);
         console.log(firstValue);
         console.log(secondValue);

        resultAdd = operate(firstValue, add, secondValue) + '+';
     console.log(resultAdd);
        input.textContent = resultAdd;
        return resultAdd;
    } else if (input.textContent.includes('–')) {
        let secondValue = parseFloat(input.textContent.split('–').pop());
        let firstValue = parseFloat(input.textContent.split('–')[0]);
        console.log(firstValue);
        console.log(secondValue);
        
        resultAdd = operate(firstValue, subtract, secondValue) + '+';
     console.log(resultAdd);
        input.textContent = resultAdd;
        return resultAdd;
    } else if (input.textContent.includes('x')) {
        let secondValue = parseFloat(input.textContent.split('x').pop());
        let firstValue = parseFloat(input.textContent.split('x')[0]);
        console.log(firstValue);
        console.log(secondValue);

        resultAdd = operate(firstValue, multiply, secondValue) + '+';
     console.log(resultAdd);
        input.textContent = resultAdd;
        return resultAdd;
    } else if (input.textContent.includes('/')) {
        let secondValue = parseFloat(input.textContent.split('/').pop());
        let firstValue = parseFloat(input.textContent.split('/')[0]);
        console.log(firstValue);
        console.log(secondValue);
        if ( secondValue == 0){
            alert('that is naughty, it is undefined');
            window.location.reload();
        } else {
        resultAdd = operate(firstValue, divide, secondValue) + '+';
     console.log(resultAdd);
        input.textContent = resultAdd;
        return resultAdd;}
    } else if (input.textContent.includes('%')) {
        let secondValue = parseFloat(input.textContent.split('%').pop());
        let firstValue = parseFloat(input.textContent.split('%')[0]);
        console.log(firstValue);
        console.log(secondValue);

        resultAdd = operate(firstValue, remainderF, secondValue) + '+';
     console.log(resultAdd);
        input.textContent = resultAdd;
        return resultAdd;
    } else {
    input.textContent += '+';}
} else if (e.target === minus) { 
    if (input.textContent.includes('+')) {
    console.log(parseFloat(input.textContent.split('+').pop()));
    let secondValue = input.textContent.split('+').pop(); 
    secondValue *= -1;
    input.textContent = parseFloat(input.textContent.split('+')[0]) + '+' + parseFloat(secondValue);
   } else if (input.textContent.includes('–')) {
    console.log(parseFloat(input.textContent.split('–').pop()));
    let secondValue = input.textContent.split('–').pop(); 
    secondValue *= -1;
    input.textContent = parseFloat(input.textContent.split('–')[0]) + '–' + parseFloat(secondValue);
   } else if (input.textContent.includes('x')) {
    console.log(parseFloat(input.textContent.split('x').pop()));
    let secondValue = input.textContent.split('x').pop(); 
    secondValue *= -1;
    input.textContent = parseFloat(input.textContent.split('x')[0]) + 'x' + parseFloat(secondValue);
   } else if (input.textContent.includes('/')) {
    console.log(parseFloat(input.textContent.split('/').pop()));
    let secondValue = input.textContent.split('/').pop(); 
    secondValue *= -1;
    input.textContent = parseFloat(input.textContent.split('/')[0]) + '/' + parseFloat(secondValue);
   } else if (input.textContent.includes('%')) {
    console.log(parseFloat(input.textContent.split('%').pop()));
    let secondValue = input.textContent.split('%').pop(); 
    secondValue *= -1;
    input.textContent = parseFloat(input.textContent.split('%')[0]) + '%' + parseFloat(secondValue);
   } else {
    input.textContent = parseFloat(input.textContent) * -1;}
} else if (e.target === subtracter) {  
    if (input.textContent.includes('+')) {
      let secondValue = parseFloat(input.textContent.split('+').pop());
      let firstValue = parseFloat(input.textContent.split('+')[0]);
      console.log(firstValue);
      console.log(secondValue);

     resultAdd = operate(firstValue, add, secondValue) + '–';
  console.log(resultAdd);
     input.textContent = resultAdd;
     return resultAdd;
 } else if (input.textContent.includes('–')) {
     let secondValue = parseFloat(input.textContent.split('–').pop());
     let firstValue = parseFloat(input.textContent.split('–')[0]);
     console.log(firstValue);
     console.log(secondValue);
     
     resultAdd = operate(firstValue, subtract, secondValue) + '–';
  console.log(resultAdd);
     input.textContent = resultAdd;
     return resultAdd;
 } else if (input.textContent.includes('x')) {
     let secondValue = parseFloat(input.textContent.split('x').pop());
     let firstValue = parseFloat(input.textContent.split('x')[0]);
     console.log(firstValue);
     console.log(secondValue);

     resultAdd = operate(firstValue, multiply, secondValue) + '–';
  console.log(resultAdd);
     input.textContent = resultAdd;
     return resultAdd;
 } else if (input.textContent.includes('/')) {
     let secondValue = parseFloat(input.textContent.split('/').pop());
     let firstValue = parseFloat(input.textContent.split('/')[0]);
     console.log(firstValue);
     console.log(secondValue);
     if ( secondValue == 0){
         alert('that is naughty, it is undefined');
         window.location.reload();
     } else {
     resultAdd = operate(firstValue, divide, secondValue) + '–';
  console.log(resultAdd);
     input.textContent = resultAdd;
     return resultAdd;}
 } else if (input.textContent.includes('%')) {
     let secondValue = parseFloat(input.textContent.split('%').pop());
     let firstValue = parseFloat(input.textContent.split('%')[0]);
     console.log(firstValue);
     console.log(secondValue);

     resultAdd = operate(firstValue, remainderF, secondValue) + '–';
  console.log(resultAdd);
     input.textContent = resultAdd;
     return resultAdd;
 } else {
    input.textContent += '–';}
} else if (e.target === multiplier) {
    if (input.textContent.includes('+')) {
        let secondValue = parseFloat(input.textContent.split('+').pop());
        let firstValue = parseFloat(input.textContent.split('+')[0]);
        console.log(firstValue);
        console.log(secondValue);
  
       resultAdd = operate(firstValue, add, secondValue) + 'x';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;
   } else if (input.textContent.includes('–')) {
       let secondValue = parseFloat(input.textContent.split('–').pop());
       let firstValue = parseFloat(input.textContent.split('–')[0]);
       console.log(firstValue);
       console.log(secondValue);
       
       resultAdd = operate(firstValue, subtract, secondValue) + 'x';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;
   } else if (input.textContent.includes('x')) {
       let secondValue = parseFloat(input.textContent.split('x').pop());
       let firstValue = parseFloat(input.textContent.split('x')[0]);
       console.log(firstValue);
       console.log(secondValue);
  
       resultAdd = operate(firstValue, multiply, secondValue) + 'x';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;
   } else if (input.textContent.includes('/')) {
       let secondValue = parseFloat(input.textContent.split('/').pop());
       let firstValue = parseFloat(input.textContent.split('/')[0]);
       console.log(firstValue);
       console.log(secondValue);
       if ( secondValue == 0){
           alert('that is naughty, it is undefined');
           window.location.reload();
       } else {
       resultAdd = operate(firstValue, divide, secondValue) + 'x';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;}
   } else if (input.textContent.includes('%')) {
       let secondValue = parseFloat(input.textContent.split('%').pop());
       let firstValue = parseFloat(input.textContent.split('%')[0]);
       console.log(firstValue);
       console.log(secondValue);
  
       resultAdd = operate(firstValue, remainderF, secondValue) + 'x';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;
   } else {
    input.textContent += 'x';}
} else if (e.target === divider) {
    if (input.textContent.includes('+')) {
        let secondValue = parseFloat(input.textContent.split('+').pop());
        let firstValue = parseFloat(input.textContent.split('+')[0]);
        console.log(firstValue);
        console.log(secondValue);
  
       resultAdd = operate(firstValue, add, secondValue) + '/';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;
   } else if (input.textContent.includes('–')) {
       let secondValue = parseFloat(input.textContent.split('–').pop());
       let firstValue = parseFloat(input.textContent.split('–')[0]);
       console.log(firstValue);
       console.log(secondValue);
       
       resultAdd = operate(firstValue, subtract, secondValue) + '/';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;
   } else if (input.textContent.includes('x')) {
       let secondValue = parseFloat(input.textContent.split('x').pop());
       let firstValue = parseFloat(input.textContent.split('x')[0]);
       console.log(firstValue);
       console.log(secondValue);
  
       resultAdd = operate(firstValue, multiply, secondValue) + '/';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;
   } else if (input.textContent.includes('/')) {
       let secondValue = parseFloat(input.textContent.split('/').pop());
       let firstValue = parseFloat(input.textContent.split('/')[0]);
       console.log(firstValue);
       console.log(secondValue);
       if ( secondValue == 0){
           alert('that is naughty, it is undefined');
           window.location.reload();
       } else {
       resultAdd = operate(firstValue, divide, secondValue) + '/';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;}
   } else if (input.textContent.includes('%')) {
       let secondValue = parseFloat(input.textContent.split('%').pop());
       let firstValue = parseFloat(input.textContent.split('%')[0]);
       console.log(firstValue);
       console.log(secondValue);
  
       resultAdd = operate(firstValue, remainderF, secondValue) + '/';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;
   } else {
    input.textContent += '/';}
} else if (e.target === remainder) {
    if (input.textContent.includes('+')) {
        let secondValue = parseFloat(input.textContent.split('+').pop());
        let firstValue = parseFloat(input.textContent.split('+')[0]);
        console.log(firstValue);
        console.log(secondValue);
  
       resultAdd = operate(firstValue, add, secondValue) + '%';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;
   } else if (input.textContent.includes('–')) {
       let secondValue = parseFloat(input.textContent.split('–').pop());
       let firstValue = parseFloat(input.textContent.split('–')[0]);
       console.log(firstValue);
       console.log(secondValue);
       
       resultAdd = operate(firstValue, subtract, secondValue) + '%';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;
   } else if (input.textContent.includes('x')) {
       let secondValue = parseFloat(input.textContent.split('x').pop());
       let firstValue = parseFloat(input.textContent.split('x')[0]);
       console.log(firstValue);
       console.log(secondValue);
  
       resultAdd = operate(firstValue, multiply, secondValue) + '%';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;
   } else if (input.textContent.includes('/')) {
       let secondValue = parseFloat(input.textContent.split('/').pop());
       let firstValue = parseFloat(input.textContent.split('/')[0]);
       console.log(firstValue);
       console.log(secondValue);
       if ( secondValue == 0){
           alert('that is naughty, it is undefined');
           window.location.reload();
       } else {
       resultAdd = operate(firstValue, divide, secondValue) + '%';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;}
   } else if (input.textContent.includes('%')) {
       let secondValue = parseFloat(input.textContent.split('%').pop());
       let firstValue = parseFloat(input.textContent.split('%')[0]);
       console.log(firstValue);
       console.log(secondValue);
  
       resultAdd = operate(firstValue, remainderF, secondValue) + '%';
    console.log(resultAdd);
       input.textContent = resultAdd;
       return resultAdd;
   } else {
    input.textContent += '%';}
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
