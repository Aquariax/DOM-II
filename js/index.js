// Your code goes here
const vin = document.querySelector('.content-pick');
vin.addEventListener('click' ,function(eventObject){
    console.log(`Current Target: ${eventObject.currentTarget}`);
    eventObject.target.style.color = "red";}
)

const tim = document.querySelector('.btn');
tim.addEventListener('mouseover' ,function(eventObject){
    eventObject.target.size = 3;}
)