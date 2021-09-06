var audio01 = document.getElementById("audio01");
var audio02 = document.getElementById("audio02");
var audio03 = document.getElementById("audio03");
var audio04 = document.getElementById("audio04");

// ============== VOLUMES DE INICIALIZAÇÃO ===========

audio01.volume = 0.5;
audio02.volume = 0.05;
audio03.volume = 0.05;
audio04.volume = 0.05;

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
    var buffer = 1
    if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0
        this.play()
    }
}, false);

audio02.addEventListener('timeupdate', function () {
    var buffer = 1
    if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0
        this.play()
    }
}, false);

audio03.addEventListener('timeupdate', function () {
    var buffer = 1
    if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0
        this.play()
    }
}, false);

audio04.addEventListener('timeupdate', function () {
    var buffer = .40
    if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0
        this.play()
    }
}, false);