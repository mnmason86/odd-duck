'use-strict';

// Create a constructor function that creates an object associated with each product and has these properties:
//    Product name
//    File path of img
//    Number of times img has been shown
//    Number of times image has been clicked


function OddDuckProduct(name,imgPath){
  this.name = name;
  this.imgPath = imgPath;
  this.imgTimesShown = 0;
  this.imgTimesClicked = 0;

}

let babySweep = new OddDuckProduct('baby-sweep', 'img/baby-sweep.png');
let banana = new OddDuckProduct('banana', 'img/banana.jpg');
let bathroom = new OddDuckProduct('bathroom', 'img/bathroom.jpg');
let boots = new OddDuckProduct('boots', 'img/boots.jpg');
let breakfast = new OddDuckProduct('breakfast', 'img/breakfast.jpg');
let bubblegum = new OddDuckProduct('bubblegum', 'img/bubblegum.jpg');
let chair = new OddDuckProduct('chair', 'img/chair.jpg');
let cthulu = new OddDuckProduct('cthulu', 'img/cthulu.jpg');
let dogDuck = new OddDuckProduct('dog-duck', 'img/dog-duck.jpg');
let dragon = new OddDuckProduct('dragon', 'img/dragon,jpg');
let pen = new OddDuckProduct('pen', 'img/pen.jpg');
let petSweep = new OddDuckProduct('pet-sweep', 'img/pet-sweep.jpg');
let r2bag = new OddDuckProduct('r2bag', 'img/r2bag.jpg');
let scissors = new OddDuckProduct('scissors', 'img/scissors.jpg');
let shark = new OddDuckProduct('shark', 'img/shark.jpg');
let tauntaun = new OddDuckProduct('tauntaun', 'img/tauntaun.jpg');
let unicorn = new OddDuckProduct('unicorn', 'img/unicorn.jpg');
let waterCan = new OddDuckProduct('water-can', 'img/water-can.jpg');
let wineGlass = new OddDuckProduct('wine-glass', 'img/wine-glass.jpg');

// Create an algorithm that randomly generates 3 unique product images from the img directory and display them side-by-side in the browser window



// Attach an Event Listener to the section of the HTML page where images are displayed.



// Generate 3 new random products after user click.
