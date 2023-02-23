const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

 // add custom attribute
 calculator.dataset.previousKeyType = 'operator';

keys.addEventListener('click',function(e){
    if(e.target.matches('button')){
        const key = e.target;
        // action এর মদ্যমে key এর data-action attribute টা পাবে 
        const action = key.dataset.action; 
        //textContent এর মদ্যমে html tag এর মদ্যে কি আছে টা বের করতে পারবে 
        // <button>7</button> এখানে textContent হল ৬ 
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType

        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'));

        if(!action){
            if(displayedNum === "0" || previousKeyType === "operator"){
                display.textContent = keyContent;
            }else{
                display.textContent = displayedNum + keyContent;
            }
        }
        if(
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ){
           /*যদি action  (add/subtract/multiply/divide) হয় তবে 
            button মনে key টা তে is-depressed css add হবে 
            এবং calculator মানে whole calculator wrapper 
            data-firstValue = displayed মানে  display তে যে ভ্যালু আছে
            টা হবে firstValue এবং 
            calculator মানে whole calculator wrapper 
            data-operator = action মানে  (add/subtract/multiply/divide) হবে
            
           (firstValue +)  
            */  


            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum; // এখানে firstValue assign করলাম 
            calculator.dataset.operator = action;  // এখানে operator assign করলাম 
            
            
          
        }
        if(action === 'decimal'){
            display.textContent = displayedNum + ".";
        }
        if(action === 'clear'){
            console.log('clear key');
        }
        if(action === 'calculate'){
            //calculate মনে equel =
            // secondeValue হবে display তে যে value দেখাবে তা 
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            //textContent এর মদ্যমে html tag এর মদ্যে কি আছে টা বের করতে পারবে    
            display.textContent = calculate(firstValue,operator,secondValue);
        }
    }
})

function calculate(firstValue,operator,secondValue){
    let result = '';
    
    if(operator === 'add'){
         result = parseFloat(firstValue) + parseFloat(secondValue);
    }else if(operator == 'subtract'){
        result = parseFloat(firstValue) - parseFloat(secondValue);
    }else if(operator == 'multiply'){
        result = parseFloat(firstValue) * parseFloat(secondValue);
    }else if(operator == 'divide'){
        result = parseFloat(firstValue) / parseFloat(secondValue);
    }
    return result;
}