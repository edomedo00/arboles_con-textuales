let cam1;
let cam2;
let isDefaultCamera = true;
let angle = 0; let angleIncrement = 0.1;
let font;

function preload() {
  // font = loadFont('./assets/IBMPlexSerif-Regular.otf');
  font = loadFont('./assets/fonts/AncizarSerif-VariableFont_wght.otf');

}

// function preload() {
//   let 
// }

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  textFont(font);
  textSize(15);

  // noLoop();

  fill('rgb(34, 34, 34)');
  // sphere(1);


  cam1 = createCamera();
  // cam1.setPosition(-100, -100, 400);
  cam1.setPosition(-130, -100, 350, 0, 0, 0);

  // Create the second camera.
  // Place it at the top-left.
  // Point it at the origin.
  // cam2 = createCamera();
  // cam2.setPosition(400, -400, 800);
  // cam2.lookAt(0, 0, 0);
}

function draw() {
  background('rgb(255, 255, 239)');
  frameRate(60);

  rotateY(angle);
  randomSeed(1);


  text("lorem ipsum", 10, 0);

  orbitControl();
  // textSize(10)
  // let s = 'The quick brown fox jumps over the lazy dog.';
  // text(s, 10, 10, 70, 80);
  branch(200, 0);
  angle+=angleIncrement;
}



function branch(len, iteration = -1) {
  strokeWeight(map(len, 10, 100, 0.5, 5))
  stroke(70, 40, 20);

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

    fill(r, g, b, 200);
    noStroke();
    push();
    translate(5, 0, 0);
    rotateZ(random(60, 120))

    rect(0,0,random(5, 10), random(10, 15))
    pop();
    // beginShape()
    // for (var i = 45; i < 135; i++) {
    //   var rad = 7;
    //   var x = rad * cos(i);
    //   var y = rad * sin(i);
    //   vertex(x, y);
    // }
    // for (var i = 135; i > 45; i--) {
    //   var rad = 7;
    //   var x = rad * cos(i);
    //   var y = rad * sin(-i + 10);
    //   vertex(x, y);
    // }
    // endShape();
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