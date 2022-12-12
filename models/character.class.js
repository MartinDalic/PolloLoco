class Character extends MovableObject {
    y = 150;
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

        this.animate();
    }

    animate() {
        setInterval(() => {

            if(this.chrWorld.keyboard.RIGHT) {
                this.x += this.speed;
            }
            if(this.chrWorld.keyboard.LEFT) {
                this.x -= this.speed;
            }

        }, 1000 / 60);

        setInterval(() => {

            if(this.chrWorld.keyboard.RIGHT) {

                // Walk Animation
                let i = this.currentImage % this.IMAGES_WALKING.length; // remainder (%) operator
                let path = this.IMAGES_WALKING[i]
                this.img = this.imageCache[path];
                this.currentImage++;
            }

        }, 50);
    }


    jump () {

    }
}