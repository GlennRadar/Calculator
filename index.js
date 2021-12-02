let screen= document.getElementById('screen');
let result = document.getElementById('result');
button = document.querySelectorAll('button');
let screenValue = ' ';
for(item of button){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;

        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = "";  
            result.value = ""; 
        }
        
        else if(buttonText == '='){
            result.value = '= ' + eval(screenValue);
        }
        
        else if(buttonText == '÷'){
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else{
            screenValue += buttonText;
            screen.value = screenValue; 
        }
    })
}