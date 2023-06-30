gap = 0
nose_x = 0
nose_y =0
left_wrist_x = 0
right_wrist_x = 0



function setup() {   
canvas = createCanvas(350,350)
canvas.center();

video = createCapture(VIDEO)
video.size(350, 350)
video.position(50, 200)

posenet = ml5.poseNet(video, modelLoaded)
posenet.on('pose', gotPoses)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
        left_wrist_x = results[0].pose.leftWrist.x
        right_wrist_x = results[0].pose.rightWrist.x
        gap = left_wrist_x - right_wrist_x
    }
   
}
function modelLoaded() {
    console.log("Posenet is initialized")
}

function preload(){

}

function draw(){
    background("mediumturquoise")
    textSize(gap)
    fill("white")
    stroke(15)
    text("Ogom", nose_x, nose_y)
    
}