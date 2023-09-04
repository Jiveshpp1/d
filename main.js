function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier(" teachablemachine.withgoogle.com/models/aKhMIfqpf/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResluts);
}
function gotResluts(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;
        document.getElementById("hear").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("number").innerHTML = 'Acuracy -'+ (results[0].confidence * 100).toFixed(2) +"%";
        document.getElementById("number").style.color = r + g + b;
        document.getElementById("hear").style.color = r + g + b;
        img = document.getElementById("img");
        if (results[0].label = Barking){
            img.src = "dog.jpg";
        }
        else if (results[0].label = awooo){
            img.src = "wolf.png";
        }
        else if (results[0].label = meow){
            img.src = "cat.png";
        }
        else if (results[0].label = moo){
            img.src = "cow.png";
        }
        
        
  }
}