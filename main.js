noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 400);
    video.position(1250, 150)

    canvas = createCanvas(550, 400);
    canvas.position(30, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#FF0000');

    document.getElementById("square_side").innerHTML = "Width and Height of the Square: " + difference + "px";
    fill('#0019FF');
    text("hello",225,200);
    textSize(difference);
    stroke('#FFFF00');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!')
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWrist = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}