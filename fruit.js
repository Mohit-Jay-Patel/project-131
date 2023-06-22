var img="";
var canvas="";
var model="";
var status="";
var objects=[];
function preload(){
img= loadImage("fruit_basket.jpg");
}
function setup(){
canvas= createCanvas(640,420);
canvas.center();
model= ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="Status : Detecting objects..";
}
function modelloaded(){
    console.log("Model has been loaded");
    status=true;
    model.detect(img,gotResults);
}
function gotResults(error,results){
 if(error){
    console.log(error);
 }
 else{
    console.log(results);
    objects=results;
   }
}
function draw(){
 image(img,0,0,640,420);
 
 if(status != ""){
   for(var j = 0;j<objects.length;j++){
      document.getElementById("status").innerHTML="Status : Objects Detected";
      document.getElementById("bedroom").innerHTML="There are "+objects.length+" objects are in the image";
      fill("#FF0000");
      var percent= floor(objects[j].confidence*100);
      text(objects[j].label+" "+percent+"%",objects[j].x+15,objects[j].y+15);
      noFill();
      stroke("#FF0000");
      rect(objects[j].x,objects[j].y,objects[j].width,objects[j].height);
   }
 }
}