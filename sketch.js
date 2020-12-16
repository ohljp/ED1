function setup() {
  createCanvas(innerWidth, innerWidth);
  background(255,255,255);
  stroke(0,0,0);
  frameRate(3);
} 

function draw() {
  clear();
  translate(30,30);
  var width = innerWidth-2*30;
  var height = innerWidth-2*30;
  var space = 35;
  var shift = 1;
  var numSquares = 10;
  
  var sideLen = width/numSquares;
  
  for(var y = 0; y < height;y = y + sideLen){
  for(var x = 0; x < width;x = x + sideLen){
  fill(random(220,220,220),random(220,220,220),random(220,220,220));
  quad(x+space+ random (-shift,shift),y+space+ random (-shift, shift), x+sideLen-space+ random (-shift, shift),y+space+ random (-shift, shift), x+sideLen-space+ random (-shift, shift),y+sideLen-space+ random (-shift, shift), x+space+ random (-shift, shift),y+sideLen-space+ random (-shift, shift));
  
  
    
      
  }
  }
}