 var  gif1_loadImg,gif1_createImg
 var gif2_loadImg,gif2_createImg

function preload() {
  gif1_loadImg= loadImage('Trex.gif')
  gif1_createImg = createImg('Trex.gif')

  gif2_loadImg= loadImage('tenor.gif')
  gif2_createImg = createImg('tenor.gif')
 
  
  
}

function setup() {
createCanvas(500,500)
background(0)


  
}

function draw() {
  background(255);
 // image(gif_loadImg, 50, 50);
  gif1_createImg.position(50,350)
  gif2_createImg.position(100,350)


  gif2_createImg.size(20,20)
  gif1_createImg.size(500,500)

  

  
}