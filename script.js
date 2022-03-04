document.title = 'Currency Converter';

const select = document.querySelector('.currency');
const btn= document.getElementById('btn');
const btn02= document.getElementById('btn-2');
const num = document.getElementById('num');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');

const USD = 3.24;
const RUB = 35;
const EUR = 3.5;
const CYN = 2;
function renderCurrency(){

    btn.addEventListener('click', ()=> {
        if(select.value === 'BYN'){
           first.value = num.value * RUB;
           second.value = num.value / USD;
           third.value = num.value / EUR;
           fourth.value = num.value * CYN;
        }
       else if(select.value === 'RUB'){
        first.value = num.value * 0.02;
        second.value = num.value * 0.009 ;
        third.value = num.value * 0.008;
        fourth.value = num.value * 0.05;
     } else if(select.value === 'USD'){
        first.value = num.value * 109;
        second.value = num.value * 3 ;
        third.value = num.value * 0.9;
        fourth.value = num.value * 6.3;
     }else if(select.value === 'EUR'){
        first.value = num.value * 121;
        second.value = num.value * 3.4 ;
        third.value = num.value * 1.1;
        fourth.value = num.value * 7;
     }else if(select.value === 'CYN'){
        first.value = num.value * 17;
        second.value = num.value * 0.48 ;
        third.value = num.value * 0.15;
        fourth.value = num.value * 0.14;
     }
      });
}
renderCurrency();

btn02.addEventListener('click',() =>{
    num.value = '';
    first.value = '';     
    second.value = ''; 
    third.value = '';     
    fourth.value = ''; 
})

   select.addEventListener('click', () => {
       
       if(select.value === 'BYN'){
           document.querySelector('.first-label').innerHTML = 'RUB:';
           document.querySelector('.second-label').innerHTML = 'USD:';
           document.querySelector('.third-label').innerHTML = 'EUR:';
           document.querySelector('.fourth-label').innerHTML = 'CYN:';
        }
       else if(select.value === 'RUB'){
           document.querySelector('.first-label').innerHTML = 'BYN:';
           document.querySelector('.second-label').innerHTML = 'USD:';
           document.querySelector('.third-label').innerHTML = 'EUR:';
           document.querySelector('.fourth-label').innerHTML = 'CYN:';
        }
        else if(select.value === 'USD'){
           document.querySelector('.first-label').innerHTML = 'RUB:';
           document.querySelector('.second-label').innerHTML = 'BYN:';
           document.querySelector('.third-label').innerHTML = 'EUR:';
           document.querySelector('.fourth-label').innerHTML = 'CYN:';
        }else if(select.value === 'EUR'){
           document.querySelector('.first-label').innerHTML = 'RUB:';
           document.querySelector('.second-label').innerHTML = 'BYN:';
           document.querySelector('.third-label').innerHTML = 'USD:';
           document.querySelector('.fourth-label').innerHTML = 'CYN:';
        }else if(select.value === 'CYN'){
           document.querySelector('.first-label').innerHTML = 'RUB:';
           document.querySelector('.second-label').innerHTML = 'BYN:';
           document.querySelector('.third-label').innerHTML = 'USD:';
           document.querySelector('.fourth-label').innerHTML = 'EUR:';
        }
   });


btn.addEventListener('click', () => {
    
    if(num.value < 0){
        alert('Число должно быть ,больше 0!')
        num.value = '';
        first.value = '';     
        second.value = ''; 
        third.value = '';     
        fourth.value = ''; 
    }
});


let max = document.getElementById('max');
max.addEventListener('keyup',(e) => {
   if(e.keyCode === 13){
      console.log('enter')
   }
})