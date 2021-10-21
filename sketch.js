
var box1,box2,box3;

function setup() {
  createCanvas(600, 400);
  box1=new Box();
  box2=new Box();
  box3=new Box();

}

function draw() {
  background(220);

  box1.show();
  box2.show();
  box3.show();
  box1.setwidth(10);
  box2.setwidth(35);
  box3.setwidth(50);
  box1.speed(1);
  box2.speed(5);
  box3.speed(10);

}

