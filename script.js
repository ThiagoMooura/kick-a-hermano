var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var pontos = 0

var criaMosquitoTempo = 1500
var nivel = window.location.search
var nivel = nivel.replace('?','')

if(nivel === 'facil'){
    criaMosquitoTempo = 1500
    tempo = 17
}if(nivel === 'medio'){
    criaMosquitoTempo = 1000
    tempo = 17
}if(nivel === 'dificil'){
    criaMosquitoTempo = 750
    tempo = 17
}if(nivel === 'ne'){
    criaMosquitoTempo = 900
    tempo = 9999
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

    if(tempo < 0){
        clearInterval(tempo)
        clearInterval(criaMosquito)
        criaMosquitoTempo = 999999
        document.querySelector('.wrap').style.display='flex'
        document.querySelector('.points').innerHTML=pontos
        document.querySelector('.painel').style.display='none'
        document.querySelector('.pics-wrap-l').style.display='flex'
        document.querySelector('.pics-wrap-r').style.display='flex'


        // CONFETI
// global variables
const confetti = document.getElementById('confetti');
const confettiCtx = confetti.getContext('2d');
let container, confettiElements = [], clickPosition;

// helper
rand = (min, max) => Math.random() * (max - min) + min;

// params to play with
const confettiParams = {
    // number of confetti per "explosion"
    number: 20,
    // min and max size for each rectangle
    size: { x: [5, 20], y: [10, 18] },
    // power of explosion
    initSpeed: 25,
    // defines how fast particles go down after blast-off
    gravity: 0.65,
    // how wide is explosion
    drag: 0.08,
    // how slow particles are falling
    terminalVelocity: 6,
    // how fast particles are rotating around themselves
    flipSpeed: 0.017,
};
const colors = [
    { front : '#3B870A', back: '#235106' },
    { front : '#B96300', back: '#6f3b00' },
    { front : '#E23D34', back: '#88251f' },
    { front : '#CD3168', back: '#7b1d3e' },
    { front : '#664E8B', back: '#3d2f53' },
    { front : '#394F78', back: '#222f48' },
    { front : '#008A8A', back: '#005353' },
];

setupCanvas();
updateConfetti();

confetti.addEventListener('click', addConfetti);
window.addEventListener('resize', () => {
    setupCanvas();
    hideConfetti();
});

// Confetti constructor
function Conf() {
    this.randomModifier = rand(-1, 1);
    this.colorPair = colors[Math.floor(rand(0, colors.length))];
    this.dimensions = {
        x: rand(confettiParams.size.x[0], confettiParams.size.x[1]),
        y: rand(confettiParams.size.y[0], confettiParams.size.y[1]),
    };
    this.position = {
        x: clickPosition[0],
        y: clickPosition[1]
    };
    this.rotation = rand(0, 2 * Math.PI);
    this.scale = { x: 1, y: 1 };
    this.velocity = {
        x: rand(-confettiParams.initSpeed, confettiParams.initSpeed) * 0.4,
        y: rand(-confettiParams.initSpeed, confettiParams.initSpeed)
    };
    this.flipSpeed = rand(0.2, 1.5) * confettiParams.flipSpeed;

    if (this.position.y <= container.h) {
        this.velocity.y = -Math.abs(this.velocity.y);
    }

    this.terminalVelocity = rand(1, 1.5) * confettiParams.terminalVelocity;

    this.update = function () {
        this.velocity.x *= 0.98;
        this.position.x += this.velocity.x;

        this.velocity.y += (this.randomModifier * confettiParams.drag);
        this.velocity.y += confettiParams.gravity;
        this.velocity.y = Math.min(this.velocity.y, this.terminalVelocity);
        this.position.y += this.velocity.y;

        this.scale.y = Math.cos((this.position.y + this.randomModifier) * this.flipSpeed);
        this.color = this.scale.y > 0 ? this.colorPair.front : this.colorPair.back;
    }
}

function updateConfetti () {
    confettiCtx.clearRect(0, 0, container.w, container.h);

    confettiElements.forEach((c) => {
        c.update();
        confettiCtx.translate(c.position.x, c.position.y);
        confettiCtx.rotate(c.rotation);
        const width = (c.dimensions.x * c.scale.x);
        const height = (c.dimensions.y * c.scale.y);
        confettiCtx.fillStyle = c.color;
        confettiCtx.fillRect(-0.5 * width, -0.5 * height, width, height);
        confettiCtx.setTransform(1, 0, 0, 1, 0, 0)
    });

    confettiElements.forEach((c, idx) => {
        if (c.position.y > container.h ||
            c.position.x < -0.5 * container.x ||
            c.position.x > 1.5 * container.x) {
            confettiElements.splice(idx, 1)
        }
    });
    window.requestAnimationFrame(updateConfetti);
}

function setupCanvas() {
    container = {
        w: confetti.clientWidth,
        h: confetti.clientHeight
    };
    confetti.width = container.w;
    confetti.height = container.h;
}

function addConfetti(e) {
    const canvasBox = confetti.getBoundingClientRect();
    if (e) {
        clickPosition = [
            e.clientX - canvasBox.left,
            e.clientY - canvasBox.top
        ];
    } else {
        clickPosition = [
            canvasBox.width * Math.random(),
            canvasBox.height * Math.random()
        ];
    }
    for (let i = 0; i < confettiParams.number; i++) {
        confettiElements.push(new Conf())
    }
}

function hideConfetti() {
    confettiElements = [];
    window.cancelAnimationFrame(updateConfetti)
}
        confettiLoop();
        function confettiLoop() {
            addConfetti();
            setTimeout(confettiLoop, 700 + Math.random() * 1700);
        }

        if(document.getElementById('mosquito')){
            document.getElementById('mosquito').remove()
        }
        //window.location.href='win.html'
    }else{
        document.getElementById('cronometro').innerHTML=tempo
    
    }
    tempo -= 1;

}, 1000);


function posicaoRandomica(){

    //remove mosquito anterior
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        //console.log('elemento selecionado foi: '+ vidas)
        if(vidas > 3){
            window.location.href = 'game_over.html'

        }else{
        document.getElementById('v' + vidas).src = 'images/coracao_vazio.png'

        vidas++;
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY =Math.floor( Math.random() * altura) - 100
    console.log(posicaoX,posicaoY)

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //Cria elemento html
    var mosquito = document.createElement('img')
    mosquito.src= fotoAleatoria()
    mosquito.className= tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.classList.add('sombra')
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
        pontos ++
    }

    document.body.appendChild(mosquito)
    console.log(ladoAleatorio())

}

function tamanhoAleatorio(){

    var classe = Math.floor(Math.random()*3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){

    var classe = Math.floor(Math.random()*2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

function fotoAleatoria(){

    var classe = Math.floor(Math.random()*3)

    switch(classe){
        case 0:
            return 'images/tevez.png';
        case 1:
            return 'images/messi.png'
        case 2:
            return 'images/dimaria.png'
    }
}

/*
setInterval(function(){
    posicaoRandomica()
}, 1000)
*/
var criaMosquito = setInterval(function(){
    posicaoRandomica()
},criaMosquitoTempo)

function reiniciar(){
    window.location.href='index.html'
}

function mute(){
    alert()
    document.querySelector('.audio').pause()
}






