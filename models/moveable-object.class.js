class MovableObject {
  x = 120;
  y = 280;
  img;
  width = 100;
  height = 150;
  imageCache = {};
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5; 

  applyGravity(){
    setInterval(() => {
      if(this.isAboveGround()){
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000/25);
  }

  isAboveGround(){
    return this.y < 150
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * load images
   * @param {Array} arr
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  playAnimation(images){
    let i = this.currentImage % images.length; // remainder (%) operator
    let path = images[i]
    this.img = this.imageCache[path];
    this.currentImage++;
  } 


  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {
    console.log("Moving left");
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
