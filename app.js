const buttons=document.querySelectorAll('button');
const screenText=document.getElementById('screen');
for(let button of buttons){
    button.addEventListener('click',function(e){
        const buttonText=e.target.innerText;
        if(buttonText==='C'){
            screenText.value='';
        }
        else if (buttonText==='X'){
            screenText.value+='*';
        }
        else if (buttonText==='='){
            try{
                screenText.value=eval(screenText.value);
            }
            catch(e){
                screenText.value='invalid operation';
            }
        }
        else{
            screenText.value+=buttonText;
        }
    });
}