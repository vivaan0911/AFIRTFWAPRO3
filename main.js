noseX = 0;
noseY = 0;

mustacheX = 0;
mustacheY = 0;

hatX=0;
hatY=0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/qM3sysG6/mustache.png');
    hat = loadImage('https://i.postimg.cc/qMCxHWqF/hat-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);

    image(mustache, mustacheX, mustacheY, 70, 70);
    image(hat, hatX, hatY, 120, 120);

    fill(0, 0, 255);
    stroke(0, 100, 255);
    circle(noseX, noseY, 20);
}

function modelLoaded() {
    console.log("pose net initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x - 5;
        noseY = results[0].pose.nose.y - 5;

        mustacheX = results[0].pose.nose.x - 28;
        mustacheY = results[0].pose.nose.y - 18;

        hatX = results[0].pose.nose.x - 38;
        hatY = results[0].pose.nose.y - 190;
    }
}

function take_snapshot() {
    save("filtered_image.png");
}
