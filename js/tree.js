let cam1; let cam2;
let isDefaultCamera = true;
let angle = 0; let angleIncrement = 0.1;
let fontTree; let textTree; let fullTxt_tree;
let words = [];
let txtFile = 'poema_octavio_paz.txt'

function preload() {
  // font = loadFont('./assets/IBMPlexSerif-Regular.otf');
  fontTree = loadFont('../assets/fonts/AncizarSerif-VariableFont_wght.otf');
  textTree = loadStrings(`../assets/texts/${txtFile}`);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // frameRate(60);
  angleMode(DEGREES);

  textFont(fontTree);
  textSize(15);

  if (textTree) {
    fullTxt_tree = textTree.join("\n");        
    fullTxt_tree = fullTxt_tree.replace(/\\n/g, "\n");
    words = fullTxt_tree.split(" ");
  }

  fill('rgb(34, 34, 34)');


  cam1 = createCamera();
  cam1.setPosition(-100, -120, 300, 0, 0, 0);

  // Create the second camera.
  // Place it at the top-left.
  // Point it at the origin.
  // cam2 = createCamera();
  // cam2.setPosition(400, -400, 800);
  // cam2.lookAt(0, 0, 0);
}

function draw() {
  background('rgb(255, 255, 239)');

  rotateY(angle);
  randomSeed(1);


  text("lorem ipsum", 10, 0);

  orbitControl();
  branch(200, 0);
  angle+=angleIncrement;
}



function branch(len, iteration = -1) {
  strokeWeight(map(len, 10, 100, 0.5, 5))
  stroke(70, 40, 20, 255);

  if (iteration === 0) {
    line(0, 0, 0, 0, -len/2, 0);
    translate(0, -len/2, 0);
  } else {
    line(0, 0, 0, 0, -len -2, 0);
    translate(0, -len, 0);
  }


  if(len > 20) {
    for (let i = 0; i < 5; i++){
      rotateY(72);
      push();

      rotateZ(random(50, 70));
      branch(len * 0.5, iteration + 1)

      pop()
    }
  } else {

    var r = 80 + random(-20, 20);
    var g = 120 + random(-20, 20);
    var b = 40 + random(-20, 20);

    fill(r, g, b, 255);
    noStroke();
    push();
    translate(5, 0, 0);
    rotateZ(random(60, 120))

    let rectX = random(5, 10);
    let rectY = random(10, 15);
    let currWord = random(words);

    // rect(0, 0, rectX, rectY);
    textSize(8)
    text(currWord, 0, 0, rectX, rectY)

    pop();
    /*
    beginShape()
    for (var i = 45; i < 135; i++) {
      var rad = 7;
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x, y);
    }
    for (var i = 135; i > 45; i--) {
      var rad = 7;
      var x = rad * cos(i);
      var y = rad * sin(-i + 10);
      vertex(x, y);
    }
    endShape();
    */
  }
}

function doubleClicked() {
  console.log('cambio')
  if (isDefaultCamera === true) {
    setCamera(cam2);
    isDefaultCamera = false;
  } else {
    setCamera(cam1);
    isDefaultCamera = true;
  }
}