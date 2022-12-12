class Level {
    enemies;
    clouds;
    bagroundObjects;
    level_end_x = 720*3+90;

    constructor(enemies, clouds, bagroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.bagroundObjects = bagroundObjects;
    }
}