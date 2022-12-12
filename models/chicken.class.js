class Chicken extends MovableObject {
    y = 390;
  width = 40;
  height = 40;
  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.x = 200 + Math.random() * 500;
  }

  eat() {}
}
