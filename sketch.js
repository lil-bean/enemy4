// aileen lian  
// lit 243 - literature in the digital age 
// professor maria sachiko cecire 
// final project 
// spring 2018 

//---------------------------------------//

// variables 
var page;
var unfamiliar;


function setup() {
    createCanvas(800, 500);
    page = 1; 
    tweet1 = loadImage("assets/tweet1.png");
    tweet2 = loadImage("assets/tweet2.png");
    tweet3 = loadImage("assets/tweet3.png");
}

function draw() {
// page 1 = the start page 
if (page == 1){
    frameRate(3);
    background(30, 5, 45);
    noStroke();
    fill(247, 246, 234);
    textSize(20);
    text("conversations",random(50, 400), 150);
    text("with", 50, 180);
    text("the", 50, 210);
    text("enemy", 50, 240);
// button to go to the next page 
    stroke(140, 141, 173);
    strokeWeight(2);
    fill(247, 246, 234);
    rect(650, 350, 100, 50);
    fill(30, 5, 45);
    noStroke();
    text("okay...", 670, 382)
    if(mouseX > 650 && mouseX < 750 && mouseY > 350 && mouseY < 400){
        stroke(140, 141, 173);
        strokeWeight(2);
        fill(140, 141, 173);
        rect(650, 350, 100, 50);
        fill(30, 5, 45);
        noStroke();
        text("okay...", 670, 382)
    }
    if(mouseIsPressed && mouseX > 650 && mouseX < 750 && mouseY > 350 && mouseY < 400){
        page = 2;
    } 
}
// page 2 = instructions for part 1 of the piece 
    if (page == 2){
        background(34, 65, 84);
        noStroke();
        fill(255);
        textSize(20);
        text("for this next part, move your mouse around a little.", 50, 150);
// button to take you to page 3
        stroke(150);
        strokeWeight(2);
        fill(200);
        rect(50, 350, 100, 50);
        fill(34, 65, 84);
        noStroke();
        text("got it", 78, 382);
    if (mouseX > 50 && mouseX < 150 && mouseY > 350 && mouseY < 400){
        fill(255);
        rect(50, 350, 100, 50);
        fill(34, 65, 84);
        noStroke();
        text("got it", 78, 382);
    }
    if(mouseIsPressed && mouseX > 50 && mouseX < 150 && mouseY > 350 && mouseY < 400){
        page = 3;
    }     
}

// page 3 = first part 
    if(page == 3){
        background(255, 211, 226);
        frameRate(3);
    if(mouseX > 0 && mouseX < 300 && mouseY > 0 && mouseY < 500){
        noStroke();
        fill(255);
        text("everything is", random(0, 800), random(0, 500));
    }
    if(mouseX > 500 && mouseX < 800 && mouseY > 0 && mouseY < 500){
        noStroke();
        fill(255, 251, 204);
        text("nothing is", random(0, 800), random(0, 500))
    }
    if(mouseX > 300 && mouseX < 500 && mouseY > 0 && mouseY < 500){
        noStroke();
        fill(16, 30, 135);
        text("real", 385, 250);
        
// button to get to page 4
    noStroke();
    fill(255, 100);
    rect(375, 228, 53, 30);
        
    if(mouseX > 375 && mouseX < 428 && mouseY > 228 && mouseY < 258){
        noStroke();
        fill(255, 180);
        rect(375, 228, 53, 30);
    }
    if(mouseIsPressed && mouseX > 375 && mouseX < 428 && mouseY > 228 && mouseY < 258){
        page = 4;
    }
    }


}

// page 4 = part 2
    if(page == 4){
        frameRate(3);
        background(16, 30, 135);
            noStroke();
            fill(255);
            text("i used to write about you a lot in the margins of my notebooks.", 50, 80);
            text("sometimes i wrote the same thing over and over again", 50, 110);
            text("over and over", 50, 140); 
            text("like when you say the same word over and over again", 50, 170);
            text("and it starts to feel unfamiliar.", 50, 200);
            text("maybe i was trying to make you feel unfamiliar.", 50, 230);
            text("(it didn't work.)", 50, 290);
        
        
    // button that takes you to the next part 
    stroke(172, 180, 239);
    fill(227, 230, 252);
    rect(50, 380, 160, 50);
    noStroke();
    fill(16, 30, 135);
    text("say it with me", 70, 413);
    
    if(mouseX > 50 && mouseX < 210 && mouseY > 380 && mouseY < 430){
        stroke(172, 180, 239);
        fill(172, 180, 239);
        rect(50, 380, 160, 50);
        noStroke();
        fill(16, 30, 135);
        text("say it with me", 70, 413);
    }    

    if(mouseIsPressed && mouseX > 50 && mouseX < 210 && mouseY > 380 && mouseY < 430) {
        page = 5;
    }  
        
    }
    
// page 5 = part 2 cont'd, a wall of unfamiliar 
    if(page == 5){
    background(16, 30, 135, 30);
    noStroke();
    fill(255);
    var unfamiliar = ['unfamiliar'];
    text(unfamiliar, mouseX, mouseY)  
// small rectangle in the corner takes you to the next page
     stroke(172, 180, 239);
     fill(227, 230, 252);
     rect(750, 450, 50, 50);
     noStroke();
     fill(16, 30, 135);
     text("ok", 764, 481);
        
if(mouseX > 750 && mouseX < 800 && mouseY > 450 && mouseY < 500){
     stroke(172, 180, 239);
     fill(172, 180, 239);
     rect(750, 450, 50, 50);
     noStroke();
     fill(16, 30, 135);
     text("ok", 764, 481);      
}
        
if(mouseIsPressed && mouseX > 750 && mouseX < 800 && mouseY > 450 && mouseY < 500){
    page = 6;
    
}
    }
// page 6 = part 3, tweets    
if(page == 6){
    background(240, 100);
    image(tweet3, 106, 27, tweet3.width/2, tweet3.height/2);
    image(tweet2, 106, 155, tweet2.width/2, tweet2.height/2);
    image(tweet1, 106, 325, tweet1.width/2, tweet1.height/2);
    
// boxes over tweets that will change when you hover 
    stroke(10);
    noFill();
    rect(106, 27, 585, 106);
    rect(106, 155, 585, 147);
    rect(106, 325, 585, 147);
    
// tweet 1 hover 
if(mouseX > 106 && mouseX < 691 && mouseY > 27 && mouseY < 133){
    stroke(10);
    fill(10, 220);
    rect(106, 27, 585, 106);
    noStroke();
    fill(255);
    textSize(15);
    text("fingers humming on interface, digital screaming, swallow me whole", 130, 84);
}

// tweet 2 hover 
if(mouseX > 106 && mouseX < 691 && mouseY > 155 && mouseY < 302){
    stroke(10);
    fill(10, 220);
    rect(106, 155, 585, 147);
    noStroke();
    fill(255);
    textSize(15);
    text("i'll use my words if you stop chewing yours raw. give your jaw a break, fuck", 130, 232);
}
    
// tweet 3 hover 
if(mouseX > 106 && mouseX < 691 && mouseY > 325 && mouseY < 471){
    stroke(10);
    fill(0, 132, 180, 230);  
    rect(106, 325, 585, 147);
    noStroke();
    fill(255);
    textSize(15);
    text("(once more with feeling?) (click me?)", 130, 401); 
}

if(mouseIsPressed && mouseX > 106 && mouseX < 691 && mouseY > 325 && mouseY < 471){
    page = 7;
    frameRate(60);
}
}

// page 7 = part 4, last part
    
if(page == 7){
    frameRate(5);
    background(64, 79, 74);
    strokeWeight(2);
    stroke(255);
    fill(230);
    rect(100, 50, 600, 400);
    
    noStroke();
    fill(255);
// from box
    rect(200, 76, 350, 22);
    
// to box
    rect(200, 103, 350, 22);
    
// subject box 
    rect(200, 139, 470, 22);
    
// message box
    rect(130, 175, 540, 220);
    

// "from"
    var from = ["server", "keyboard", "memory", "processor", "antenna", "cache", 
                "battery", "screen", "sensor", "camera", "GPU", "hard drive", "radio wave", 
                "frequency", "hotspot", "router", "RAM", "modem", "speaker", "transmitter", 
                "microphone", "network"];
    var chooseFrom = random(from);
    fill(10);
    text(chooseFrom, 207, 93);
    
// "to"
    var to = ["muscle", "bone", "retina", "neuron", "eardrum", "fingertip"
              "neurotransmitter", "frontal lobe", "cornea", "hippocampus",
              "cochlea", "membrane", "synapse", "nerve", "chemoreceptor",
              "spinal cord", "amygdala"];
    var chooseTo = random(to);
    fill(10);
    text(chooseTo, 207, 120);

    
// "subject"
    var subject = ["did you see this?", "how are you?", "how are your parents?", "have you heard of this?", "are you okay?", 
                   "do you remember this?", "are you safe?", "are you happy?", "when will you be back?"];
    var chooseSubject = random(subject);
    fill(10);
    text(chooseSubject, 207, 156);
    
    
// from, to, and subject labels    
    noStroke();
    fill(10);
    text("from", 130, 95);
    text("to", 130, 120);
    text("subject", 130, 155); 
    
// send message button
    fill(163, 65, 65);
    rect(555, 407, 115, 30);
    fill(255);
    text("send message", 564, 426);
    
// pressing the send button
    if(mouseX > 555 && mouseX < 670 && mouseY > 407 && mouseY < 437){
    fill(104, 41, 41);
    rect(555, 407, 115, 30);
    fill(255);
    text("send message", 564, 426);   
    }
    if(mouseIsPressed && mouseX > 555 && mouseX < 670 && mouseY > 407 && mouseY < 437){
        page = 8;
    }
    
}
// page 8 = "send this message without text in the body"
if (page == 8){
    frameRate(3);
    background(100, 10);
    stroke(0);
    fill(255);
    rect(240, 200, 320, 100);
    noStroke();
    fill(10);
    textSize(15);
    text("send this message without text in the body?", 253, 235);
    
// "ok" button that takes you back to the home page 
    stroke(100);
    fill(240);
    rect(370, 260, 60, 25);
    noStroke();
    fill(10);
    text("ok", 391, 278);
    
if(mouseX > 370 && mouseX < 430 && mouseY > 260 && mouseY < 285){
    stroke(0, 132, 180);
    fill(147, 225, 255);
    rect(370, 260, 60, 25);
    noStroke();
    fill(10);
    text("ok", 391, 278);
}

if(mouseIsPressed && mouseX > 370 && mouseX < 430 && mouseY > 260 && mouseY < 285){
    page = 1;
}
    
}
    
    
}
    
    
    

