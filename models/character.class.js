class Character extends MovableObject {
    y = 80; // 150
    height = 280;
    speed = 10;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ]
    currentImage = 0;
    chrWorld;


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {

            if(this.chrWorld.keyboard.RIGHT && this.x < this.chrWorld.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if(this.chrWorld.keyboard.LEFT && this.x > this.chrWorld.level.level_start_x) {
                this.x -= this.speed;
                this.otherDirection = true;
            }         
            this.chrWorld.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {

            if(this.chrWorld.keyboard.RIGHT || this.chrWorld.keyboard.LEFT) {

                // Walk Animation
                this.playAnimation(this.IMAGES_WALKING);
            }

        }, 50);
    }


    jump () {

    }
}