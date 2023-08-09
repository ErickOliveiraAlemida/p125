var diferenca = 0
var pulsoDireitoX = 0
var pulsoEsquerdoX = 0

function setup (){
    video = createCapture(VIDEO)
    video.size(550, 420)
    canvas = createCanvas(550, 420)
    canvas.position(560, 150)
    poseNet = ml5.poseNet(video, modelLoad())
    poseNet.on("pose", gotPoses)
}
function draw (){
    background("#969A97")
    document.getElementById("quadrado").innerHTML = "tamanho da fonte será = " + diferenca + "px"
    textSize(diferenca)
    fill("#F90093")
    text("Aula", 50, 400)
}

function modelLoad (){
    console.log("modelo carregado")
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results)
        pulsoDireitoX = results[0].pose.rightWrist.x
        pulsoEsquerdoX = results[0].pose.leftWrist.x
        diferenca = floor(pulsoEsquerdoX - pulsoDireitoX)
    }
}