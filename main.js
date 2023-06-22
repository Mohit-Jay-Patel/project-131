var img="";
var canvas="";
var model="";
var status="";
function preload(){
img= loadImage("");
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
 }
}
function draw(){
 image(img,0,0,640,420);
}