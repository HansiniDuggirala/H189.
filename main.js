noseX=0;
noseY=0;

function preload ()
{}

function setup ()
{
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size = (500,500);
    video.hide();

    poseNet = ml5.poseNet (video, modelLoaded);
    console.log("gotPoses1");
    poseNet.on('pose', gotPoses);
    console.log("gotPoses2");
}

function gotPoses(results) 
{ 
    if(results.length > 0) 
{ console.log(results); 
noseX = results[0].pose.nose.x; noseY = results[0].pose.nose.y; } 
}

function modelLoaded ()
{
    console.log('poseNet is instialized');
}

function draw ()
{
image(video, 0,0,500,500);
fill(255,0,0);
stroke(255,0,0);
circle(noseX,noseY,20);
}

 function take_snapshot()
 {
     save('ClownMe.png');
 }
