 const mainTitle= document.querySelector('#numb');

 let curvalue=0;


 const decrement= document.querySelector('#decrement');
 const reset= document.querySelector('#reset');
 const increment= document.querySelector('#increment');

 increment.addEventListener('click', () => {
    curvalue++;
    mainTitle.textContent = curvalue;
 });
decrement.addEventListener('click',()=>{
    curvalue--;
    mainTitle.textContent=curvalue;
});
reset.addEventListener('click',()=> {
    curvalue=0;
    mainTitle.textContent=curvalue;
});
