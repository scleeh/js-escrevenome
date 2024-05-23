//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
 mostraRaquete();
 movimentaMinhaRaquete()
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha > width ||
    xBolinha < 0){
   velocidadeXBolinha *= -1;
 }
  if (yBolinha > height ||
     yBolinha < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(){
   rect(xRaquete, yRaquete, raqueteComprimento,
       raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){}
    yRaquete -= 10;
 }
  if (keyIsDown(UP_ARROW)){
     yRaquete += 10;
  }
} 
  
  
  
  
  
