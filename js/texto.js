
const textSketch = p => {

  p.setup = () => {
    const c = p.createCanvas(p.windowWidth, p.windowHeight);
    c.parent('text-sketch');      
    // c.style('pointer-events', 'none');
    p.noCursor();

  };

  p.draw = () => {
    p.clear(); 
    
    fill('rgb(255, 0, 0)')
    rect(100, 100, 100, 100)
  };

  // p.windowResized = () => {
  //   p.resizeCanvas(p.windowWidth, p.windowHeight);
  // };

  
};

// mount it
new p5(textSketch);
