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

//if current string is 0, replaces 0 with the number clicked
function not0(){
    if(screen.innerText === '0'){
        screen.innerText = '';
    }
};

//event listener for each number button (0 - 9)
butt0.addEventListener('click',function(){
    screen.innerText += butt0.innerText;
})
butt1.addEventListener('click',function(){
    not0();
    screen.innerText += butt1.innerText;
});

butt2.addEventListener('click',function(){
    not0();
    screen.innerText += butt2.innerText;
});

butt3.addEventListener('click',function(){
    not0();
    screen.innerText += butt3.innerText;
});

butt4.addEventListener('click',function(){
    not0();
    screen.innerText += butt4.innerText;
});

butt5.addEventListener('click',function(){
    not0();
    screen.innerText += butt5.innerText;
});

butt6.addEventListener('click',function(){
    not0();
    screen.innerText += butt6.innerText;
});

butt7.addEventListener('click',function(){
    not0();
    screen.innerText += butt7.innerText;
});

butt8.addEventListener('click',function(){
    not0();
    screen.innerText += butt8.innerText;
});

butt9.addEventListener('click',function(){
    not0();
    screen.innerText += butt9.innerText;
});

//event listeners for every other button
buttAc.addEventListener('click',function(){
    screen.innerText = '0';
});

buttPlus.addEventListener('click',function(){
    screen.innerHTML += ' +&nbsp';
});

buttEqual.addEventListener('click', function(){
    if(screen.innerText.includes('x')){
        screen.innerText = screen.innerText.replace('x','*');
    }
    if(screen.innerText.includes('??')){
        screen.innerText = screen.innerText.replace('??','/');
    }
    // screen.innerText = screen.innerText.replace('&nbsp',' ');
    screen.innerText = eval(screen.innerText);
});

buttPercent.addEventListener('click', function(){
    if(screen.innerText.includes('x')){
        screen.innerText = screen.innerText.replace('x','*');
    }
    if(screen.innerText.includes('??')){
        screen.innerText = screen.innerText.replace('??','/');
    }
    // screen.innerText = screen.innerText.replace('&nbsp',' ');
    screen.innerText = 0.10*(eval(screen.innerText));
});

buttMinus.addEventListener('click',function(){
    screen.innerHTML += ' -&nbsp';
});

buttPeriod.addEventListener('click',function(){
    screen.innerText += '.';
});

buttX.addEventListener('click',function(){
    screen.innerHTML += ' x&nbsp';
});

buttDiv.addEventListener('click',function(){
    screen.innerHTML += ' ??&nbsp'
});

buttPosNeg.addEventListener('click', function(){
    let str = screen.innerHTML;
    let index = str.lastIndexOf(';') + 1;
    let lastNum = str.substring(index, str.length);
    let returnVal = lastNum * (-1)
    screen.innerHTML = str.substring(0, index) + returnVal;
});