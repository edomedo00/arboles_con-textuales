let fontText; let txtText; let fullTxt_text;
let lines;
const fontSize = 28;

const textSketch = p => {

  p.preload = () => {
    fontText = p.loadFont('./assets/fonts/AncizarSerif-VariableFont_wght.otf');
    txtText = p.loadStrings(`./assets/texts/${txtFile}`);
  }
  
  p.setup = () => {
    const c = p.createCanvas(p.windowWidth, p.windowHeight);
    c.parent('text-sketch');
    // p.noCursor();
    
    p.textFont(fontText);
    p.textSize(fontSize);
    p.fill(29);

    // p.leavesDistSl = createSlider(0, 100, 20);
    // p.leavesDistSl.position(50, 600);
    // p.leavesDistSl.size(100);


    
    if (txtText) {
      fullTxt_text = txtText.join("\n");        
      fullTxt_text = fullTxt_text.replace(/\\n/g, "\n");
    }
  };
  
  p.draw = () => {
    p.clear();
    p.text(fullTxt_text, 80, 110, p.width/3, p.height);
    
    // p.updateSliders();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  // p.updateSliders = () => {
  //   leavesDist = p.leavesDistSl.value();
  // };
};

new p5(textSketch);
