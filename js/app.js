function getPin(){
    const pin = generatPin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatPin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('randon-number-generator').addEventListener('click', function(){
    const pin = getPin();
    const randonNumberField = document.getElementById('randon-number-field');
    randonNumberField.value = pin;
});

document.getElementById('calculator').addEventListener('click',function(event){
    const number  = event.target.innerText;
    const typeNumberField = document.getElementById('type-number-field');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypeNumber = previousTypeNumber + number;
        if(newTypeNumber.length > 4){
            return;
        }
        typeNumberField.value = newTypeNumber;
    }
});

let count = 4;
document.getElementById('submit-btn').addEventListener('click',function(){
    count--;
    const randonNumberField = document.getElementById('randon-number-field');
    const pin = randonNumberField.value;

    const typeNumberField = document.getElementById('type-number-field');
    const previousTypeNumber = typeNumberField.value;

    const right = document.getElementById('right');
    const wrong = document.getElementById('wrong');
    if(count < 0){
        return;
    }
    else if((pin.length === 0) || (previousTypeNumber.length === 0)){
        return;
    }
    else if(previousTypeNumber.length === 4){
        if(pin === previousTypeNumber){
            right.style.display = 'block';
            wrong.style.display = 'none';
        }
        else{
            const changes = document.getElementById('chances');
            changes.innerText = count;
            const warning = document.getElementById('warning');
            warning.style.display = 'block'
            typeNumberField.value = '';
            right.style.display = 'none';
            wrong.style.display = 'block';
        }
    }
    else{
        return;
    }

});