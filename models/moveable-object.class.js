class MovableObject {
  x = 120;
  y = 280;
  img;
  width = 100;
  height = 150;
  imageCache = {};

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   *
   * @param {Array} arr
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {
    console.log("Moving left");
  }
}
