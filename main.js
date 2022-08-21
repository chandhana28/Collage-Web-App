var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);

    if(Content == "selfie") {
        speak();
        console.log("selfie")
    }
}




function speak(){

    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function(){
        image_id = "selfie1";
        takeSelfie();
        speak_data = "Taking Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
    },5000);

    setTimeout(function(){
        image_id = "selfie2";
        takeSelfie();
        speak_data = "Taking next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
    },10000);

    setTimeout(function(){
        image_id = "selfie3";
        takeSelfie();
        speak_data = "Taking last Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    
    },15000);
}


Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});
camera = document.getElementById("camera");

function takeSelfie() {
    console.log(image_id);
    Webcam.snap(function(data_uri) {
        if(image_id == "selfie1") {
            document.getElementById("result1").innerHTML = "<img id='selfie1' src='"+data_uri+"'/>";
        }
        if(image_id == "selfie2") {
            document.getElementById("result2").innerHTML = "<img id='selfie2' src='"+data_uri+"'/>";
        }
        if(image_id == "selfie3") {
            document.getElementById("result3").innerHTML = "<img id='selfie3' src='"+data_uri+"'/>";
        }
    })
}
