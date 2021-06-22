
var lana,lana1;
var bgimage;
var gameState = 1;
var button1, greeting, input;
var inp1;
var number;
function preload()
{
	bgimage = loadImage("bg4.jpg")
}

function setup() {

	createCanvas(1024,768);
  //create sprite for player 
  lana = createSprite(135,123,10,10);
  lana1 = createSprite(135,442,10,10);
  
  //creating the login /register form 

  //display input box 
  input = createInput();
  input.hide();

  button1 = createButton('Submit');
  button1.hide();

  button2 = createButton('Next');
  button2.hide();

  greeting = createElement('h2', 'What is your name?');
  greeting.hide();
  //lana1.visible = false;

  greetPlayer=createElement('h3');
  greetPlayer.hide();

  number=createElement('h4');
  number.hide();

}


function draw() {
  background('white');

 if(gameState == 1)
 {
   background(bgimage);
   lana.visible = true;
   lana1.visible = true;
  
    input.show();
    input.position(365, 565);
    inp1=input.value();
    
  
    button1.show();
    button1.position(input.x + input.width, 565);

    greeting.show();
    greeting.position(365, 505);
      
  
  fill(255, 153, 0);
  textSize(30);
  textFont('Georgia');
  text('Hi! Im Lana!, Ill be leading you on your journey of eye testing!', 170, 130);
 
  fill(255, 153, 0);
  textSize(30);
  textFont('Georgia');
  text('Please enter your username so we know what to call you.', 170, 250);
   
 }

 button1.mousePressed(()=>{
   gameState=2;
  
 })
 
 if(gameState == 2){
  input.hide();
  button1.hide();
  greeting.hide();
  button2.show();
  button2.position(250,565);
  greetPlayer.show();
  greetPlayer.style('font-size','25px');
  greetPlayer.html("   HELLO   " + inp1);
  greetPlayer.position(200,120);

  textSize(30);
  text('This is the second step',200,200);
  text('1. Please stand 3 steps away from your phone',200,250);
  text('2. Answer all the questions in the next step',200,300);
  text('3. Your result will be given to you after 2 steps!',200,350);
  lana1.visible = false;
  lana.visible = false;  
 }
  
 button2.mousePressed(()=>{

  gameState=3;
 })

 if(gameState==3){
  greetPlayer.hide(); 
 
  number.show();
  number.html("5");
  number.position(100,100);
  
 
     setTimeout(number.show(),4000);
 

 }
 
  drawSprites();
 
}
