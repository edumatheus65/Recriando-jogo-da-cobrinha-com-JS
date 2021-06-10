var canvas = document.getElementById('snake');
var ctx = canvas.getContext('2d');
let box = 32;

function criarBG(){
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(0, 0, 16 * box, 16 * box);}


criarBG();


