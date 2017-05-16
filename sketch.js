var img;
var wheel

function preload() {
img = loadImage("assets/illusion.png")
wheel = loadImage("assets/illusionwheel.png")
}

var img;
function setup() {
  imageMode(CENTER);



}

function draw() {
  createCanvas(windowWidth,windowHeight);
  image(img,width*.5,height*.5,width,height);
  
  // push();
  // translate(width*.5,height*.5)
  // image(wheel,0,0,mouseY,400,400);
  // pop();
  
  
    push();
    translate( width*.5,height*.5);

    rotate(frameCount/-PI*.010);
    image(wheel, width*.005,height*.005,550,550);
    pop();
  
}