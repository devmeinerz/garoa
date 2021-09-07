var audio01 = document.getElementById("audio01");
var audio02 = document.getElementById("audio02");
var audio03 = document.getElementById("audio03");
var audio04 = document.getElementById("audio04");

var botaoRain = document.getElementById("rain");
var botaoBolt = document.getElementById("bolt");
var botaoWind = document.getElementById("wind");
var botaoWave = document.getElementById("wave");

var botaoPlay01 = document.getElementById("rain-play");
var botaoPlay02 = document.getElementById("bolt-play");
var botaoPlay03 = document.getElementById("wind-play");
var botaoPlay04 = document.getElementById("wave-play");


// ============== VOLUMES DE INICIALIZAÇÃO ===========

audio01.volume = 0.5;
audio02.volume = 0.5;
audio03.volume = 0.5;
audio04.volume = 0.5;

// ============== BOTÕES PLAY/PAUSE DOS SONS ===========

function playOrPause01(){
    
    if (audio01.paused){
        audio01.play();
        botaoPlay01.src="/assets/images/pause.png";
    }else{
        audio01.pause();
        botaoPlay01.src="/assets/images/play.png";
    }
};

function playOrPause02(){
    if (audio02.paused){
        audio02.play();
        botaoPlay02.src="/assets/images/pause.png";
    }else{
        audio02.pause();
        botaoPlay02.src="/assets/images/play.png";
    }
};

function playOrPause03(){
    if (audio03.paused){
        audio03.play();
        botaoPlay03.src="/assets/images/pause.png";
    }else{
        audio03.pause();
        botaoPlay03.src="/assets/images/play.png";
    }
};

function playOrPause04(){
    if (audio04.paused){
        audio04.play();
        botaoPlay04.src="/assets/images/pause.png";
    }else{
        audio04.pause();
        botaoPlay04.src="/assets/images/play.png";
    }
};

// ============== CONTROLA O VOLUME DOS SLIDERS ===========

function setVolume1(value) {
    audio01.volume = value / 100;
}
function setVolume2(value) {
    audio02.volume = value / 100;
}
function setVolume3(value) {
    audio03.volume = value / 100;
}
function setVolume4(value) {
    audio04.volume = value / 100;
}

// ============== REMOVE O GAP DO LOOP DE AUDIO DO HTML5 ===========

audio01.addEventListener('timeupdate', function () {
    var buffer = .99
    if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0
        this.play()
    }
}, false);

audio02.addEventListener('timeupdate', function () {
    var buffer = .99
    if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0
        this.play()
    }
}, false);

audio03.addEventListener('timeupdate', function () {
    var buffer = .99
    if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0
        this.play()
    }
}, false);

audio04.addEventListener('timeupdate', function () {
    var buffer = .99
    if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0
        this.play()
    }
}, false);