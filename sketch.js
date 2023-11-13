//----------------------------

var sound1
function preload(){
  sound1 = loadSound("7j35c-2ml4z.mp3") //先把音樂檔載入到sound1程式碼中
}
/////
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100);
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)



  
}
/////

var x=50
var y=50
var r=100
var w=100

/////
function draw() {
  background(100)
  
  noFill()
  rectMode(CENTER) //設框中心座標點
 
  
  for(var y=20;y<=height;y=y+60){
    for(var x=10;x<=width;x=x+60){

if(sound1.isPlaying())
    { //when 音樂播放
     fc = map(analyzer.getLevel()*25,0,1,0,100)
     fc1 = map(analyzer.getLevel()*25,0,1,0,200)
     }
     else
   { //when not playing
       fc=map(mouseX*10,0,width,0,100)
       fc1=map(mouseX*10,0,width,0,200)
   }

      stroke(255) //白line
      ellipse(x,y,fc/25) //畫圓
      strokeWeight(5)
  //---
      stroke("#2B2D42")
      strokeWeight(4)
      rect(x,y,fc/10)
  //---
      stroke(0)
      strokeWeight(2)
      rect(x+20,y+20,fc/20)
  //---
      stroke("#92DCE5")
      strokeWeight(3)
      ellipse(x-20,y-20,fc/10)
    }
  }

  stroke("#D65780")
  fill(255)
  text("412730086馬語潔",width/20,height/10)
  
  textSize(30)

}




  /////
  
/////

/////
function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }

}