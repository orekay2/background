function setup() {
createCanvas(1920,1080);
  background(color(0,0,0))
colorMode(HSB)
  rectMode(CENTER)
}
var a =0
var i = 0
var b = true
function draw() {
  a+=1
  fill(color(a,100,100) )
  translate(960,540)
  rotate(a)
  if (i>1000 && b ==true) {
    b = false
  }
  
  if (i<-1000 && b == false) {
   b = true 
  }
  if(b==false) {
    i-=1
  }
  if (b == true) {
    i+=1
  }
   if (a>= 400) {
    a = 0
  }
  console.log(i)
rect(i,i,100,100)
  frameRate(480)
}
