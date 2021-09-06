var audio01 = document.getElementById("audio01");
var audio02 = document.getElementById("audio02");
var audio03 = document.getElementById("audio03");

audio01.volume = 1;
audio02.volume = 0;
audio03.volume = 0;


function setVolume1(value){
    audio01.volume = value/100;
}

function setVolume2(value){
    audio02.volume = value/100;
}

function setVolume3(value){
    audio03.volume = value/100;
}

