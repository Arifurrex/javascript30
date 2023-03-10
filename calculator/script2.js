const calculate =(n1,operator,n2)=>{
    let result = "";
    if(operator === 'add'){
        result = parseFloat(n1) + parseFloat(n2);
    }else if(operator === 'subtract'){
        result = parseFloat(n1) - parseFloat(n2);
    }else if(operator === 'multiply'){
        result = parseFloat(n1) * parseFloat(n2); 
    }else if(operator === 'divide'){
        result = parseFloat(n1) / parseFloat(n2);
    }

    return result;
}

const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');


console.log(display.dataset);

keys.addEventListener('click',function(e){
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        console.log(displayedNum);
      
        Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
       
        if(!action){
            if(displayedNum === '0'){
                display.textContent = keyContent;
            }else{
                display.textContent = displayedNum + keyContent;
            } 
            calculator.dataset.previousKeyType = 'number';
        }
        
        if( 
          action === 'add'||
          action === 'subtract' ||
          action === 'multiply' ||
          action === 'divide'
          ){
            
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if(firstValue 
                && operator
                && previousKeyType !== 'operator' ){
                display.textContent = calculate(firstValue,operator,secondValue)
            }

            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = "operator";
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;

          }
          if(action === 'decimal'){
            display.textContent = displayedNum + '.';
    
            if(!displayedNum.includes('.')){
               display.textContent = displayedNum + '.';
            }else if(previousKeyType === 'operator'){
                display.textContent ='0.'
            }

            calculator.dataset.previousKeyType = 'dicimal';
          }
          if(action === 'clear'){
            console.log('clear key!');
            calculator.dataset.previousKeyType ="clear";
          }
          if(action ==='calculate'){
            console.log('equal key');
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            calculator.dataset.previousKeyType = 'calculate';

            
            display.textContent = calculate(firstValue,operator,secondValue);
            
            
          }

    }
    
})