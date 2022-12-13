let backgroundArray = [];

/**
 * build an Array with FOR-loop --- UNFINISHED function
 * @param {Number} indexStart 
 * @param {Number} indexEnd 
 * @param {Array} array 
 */
function defArrayWithFor(indexStart, indexEnd, array) {
  array = [];
  for (let i = indexStart; i < indexEnd; i++){
    if(i<0) i = i * -1;
    // backgroundArray.push(`${prefixName}_${padWithZero(i,3)}.jpg`);
    array.push(new BackgroundObject("img/5_background/layers/air.png", 719*i, 0));
    array.push(new BackgroundObject(`img/5_background/layers/3_third_layer/${i%2+1}.png`, 719*i, 0));
    array.push(new BackgroundObject(`img/5_background/layers/2_second_layer/${i%2+1}.png`, 719*i, 0));
    array.push(new BackgroundObject(`img/5_background/layers/1_first_layer/${i%2+1}.png`, 719*i, 0));
  }
  // return array
}

function createArray(){
  defArrayWithFor(-1, 3, backgroundArray);
}

const level1 = new Level(
    [new Chicken(), new Chicken(), new Chicken(), new Endboss()],
    [new Cloud()],
    [
      new BackgroundObject("img/5_background/layers/air.png", 719*-1, 0),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719*-1, 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719*-1, 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719*-1, 0),
  
      new BackgroundObject("img/5_background/layers/air.png", 719*0, 0),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719*0, 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719*0, 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719*0, 0),
  
      new BackgroundObject("img/5_background/layers/air.png", 719*1, 0),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719*1, 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719*1, 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719*1, 0),
  
      new BackgroundObject("img/5_background/layers/air.png", 719*2, 0),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719*2, 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719*2, 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719*2, 0),
  
      new BackgroundObject("img/5_background/layers/air.png", 719*3, 0),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719*3, 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719*3, 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719*3, 0),
    ]
    // backgroundArray
);





