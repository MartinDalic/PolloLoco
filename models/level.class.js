class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_start_x = -2*720 + 110;
    level_end_x = 720*3 + 90;

    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}