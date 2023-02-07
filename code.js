var screen = document.querySelector("#displayBox");
//variables for the first line
const buttAc = document.querySelector('#firstline > button:nth-child(1)');
const buttPosNeg = document.querySelector('#firstline > button:nth-child(2)');
const buttPercent = document.querySelector('#firstline > button:nth-child(3)');
const buttDiv = document.querySelector('#firstline > button:nth-child(4)');

//variables for the second line
const butt7 = document.querySelector('#secondline > button:nth-child(1)');
const butt8 = document.querySelector('#secondline > button:nth-child(2)');
const butt9 = document.querySelector('#secondline > button:nth-child(3)');
const buttX = document.querySelector('#secondline > button:nth-child(4)');

//variables for the third line
const butt4 = document.querySelector('#thirdline > button:nth-child(1)');
const butt5 = document.querySelector('#thirdline > button:nth-child(2)');
const butt6 = document.querySelector('#thirdline > button:nth-child(3)');
const buttMinus = document.querySelector('#thirdline > button:nth-child(4)');

//variables for the fourth line
const butt1 = document.querySelector('#fourthline > button:nth-child(1)');
const butt2 = document.querySelector('#fourthline > button:nth-child(2)');
const butt3 = document.querySelector('#fourthline > button:nth-child(3)');
const buttPlus = document.querySelector('#fourthline > button:nth-child(4)');

//variables for the fifth line
const butt0 = document.querySelector('#fifthline > button:nth-child(1)');
const buttPeriod = document.querySelector('#fifthline > button:nth-child(2)');
const buttEqual = document.querySelector('#fifthline > button:nth-child(3)');

var total = 0;

butt1.addEventListener('click',function(){
    screen.innerText += butt1.innerText;
});

butt2.addEventListener('click',function(){
    screen.innerText += butt2.innerText;
});

butt3.addEventListener('click',function(){
    screen.innerText += butt3.innerText;
});

butt4.addEventListener('click',function(){
    screen.innerText += butt4.innerText;
});

butt5.addEventListener('click',function(){
    screen.innerText += butt5.innerText;
});

butt6.addEventListener('click',function(){
    screen.innerText += butt6.innerText;
});

butt7.addEventListener('click',function(){
    screen.innerText += butt7.innerText;
});

butt8.addEventListener('click',function(){
    screen.innerText += butt8.innerText;
});

butt9.addEventListener('click',function(){
    screen.innerText += butt9.innerText;
});