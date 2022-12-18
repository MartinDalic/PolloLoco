let backgroundArray = [];
// let i;
// let indexPic;
// let arrBackgroundObject = [
//   new BackgroundObject("img/5_background/layers/air.png", 719*i, 0),
//   new BackgroundObject(`img/5_background/layers/3_third_layer/${indexPic%2+1}.png`, 719*i, 0),
//   new BackgroundObject(`img/5_background/layers/2_second_layer/${indexPic%2+1}.png`, 719*i, 0),
//   new BackgroundObject(`img/5_background/layers/1_first_layer/${indexPic%2+1}.png`, 719*i, 0),
// ];

/**
 * build an Array with FOR-loop
 * @param {Number} indexStart 
 * @param {Number} indexEnd 
 * @param {Array} array 
 * @returns 
 */
// function defArrayWithFor(indexStart, indexEnd, array, arrObjects) {
function defArrayWithFor(indexStart, indexEnd, array) {
  // array = [];
  let indexPic = 0;
  for (let i = indexStart; i < indexEnd+1; i++){
    if(i <  0) indexPic = i * -1;
    if(i >= 0) indexPic = i;
    // for (let j = 0; j < arrObjects.length; j++) {
    //   array.push(arrObjects[j]);

    // }
    array.push(new BackgroundObject("img/5_background/layers/air.png", 719*i, 0));
    array.push(new BackgroundObject(`img/5_background/layers/3_third_layer/${indexPic%2+1}.png`, 719*i, 0));
    array.push(new BackgroundObject(`img/5_background/layers/2_second_layer/${indexPic%2+1}.png`, 719*i, 0));
    array.push(new BackgroundObject(`img/5_background/layers/1_first_layer/${indexPic%2+1}.png`, 719*i, 0));
  }
  console.log(array);
  return array
}

const level1 = new Level(
    [new Chicken(), new Chicken(), new Chicken(), new Endboss()],
    [new Cloud()],
    defArrayWithFor(-2, 3, backgroundArray),   
    // backgroundArray = defArrayWithFor(-2, 3, backgroundArray),   
);





