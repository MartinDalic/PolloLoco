class Chicken extends MovableObject {
    y = 360;
  width = 70;
  height = 70;

IMAGES_WALKING = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
]
currentImage = 0;


  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 500;

    this.animate();
}

animate() {
    setInterval(() => {
        let i = this.currentImage % this.IMAGES_WALKING.length; // remainder (%) operator
        let path = this.IMAGES_WALKING[i]
        this.img = this.imageCache[path];
        this.currentImage++;
    }, 400);
}

  eat() {}
}
