let button = document.querySelector("button");
 let currentTime = document.querySelector('p');
 let stop = document.querySelector('.stop');
 let h2 = document.querySelector('h2');
 let rem = document.querySelector('.remember');
 let list = document.querySelector(".list");
 let sum = 1;
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let milisec = document.querySelector('.milisec');
let interval=0
let milisecend = 0
let minut = 0
let secend = 0
function timerStart(){
  
milisecend += 10;
if(milisecend > 99){
    secend++;
   milisecend=0;
}

if(secend > 59){
     minut++;
   secend=0;
}
if(minut > 59){
   minut=0;
}
minut <= 9 ? min.innerHTML = '0'+ minut : min.innerHTML=minut;
secend <= 9 ? sec.innerHTML='0'+secend : sec.innerHTML = secend;
milisecend == 0 ? milisec.innerHTML='0'+ milisecend : milisec.innerHTML=milisecend;


return currentTime = `${minut} : ${secend} : ${milisecend}`;

}
 

  

button.addEventListener("click", function(){
   clearInterval(interval);
 interval = setInterval(timerStart,100);
 
})

 stop.addEventListener('click', function(){
     clearInterval(interval);
    

 })
rem.addEventListener("click", function(){
     let elem = document.createElement('li');
     let time = document.createElement('div');    
     let num = document.createElement('div');
     let del = document.createElement('button');  
     num.innerHTML = sum++; 
     console.log(currentTime)
     time.innerHTML=currentTime;
     del.innerHTML = 'delete';
      elem.appendChild(num); 
     elem.appendChild(time);
     list.appendChild(elem);
    
     elem.appendChild(del);
     elem.classList.add('link-list');
     time.classList.add('time');
     num.classList.add('num');
     del.classList.add('delete');
     del.addEventListener("click", function(){
      elem.remove();
     })
   
})
