img = "";
status = "";
objects = [];

function preload(){
    img = loadImage('person_using_lapp.jfif');

}

function setup(){
    ctx = createCanvas(640,420);
    ctx.center();
    idenitify = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw(){
    image(img,0,0,640,420);
    if(status != ""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML = "Status: Detected Objects";
            fill("#cc0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + percent + "%", objects[i].x+10 , objects[i].y+15);
            noFill();
            stroke("#cc0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
        
        
    }
    

}

function modelLoaded(){
    console.log("MOdel loaded");
    status = true;
    idenitify.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    
        console.log(results);
        objects = results;
        
    
}