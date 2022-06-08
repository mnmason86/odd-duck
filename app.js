'use-strict';

//Array to hold product images

OddDuckProducts.allProducts = [];

// Create a constructor function that creates an object associated with each product

function OddDuckProducts(name,imgPath){
  this.name = name;
  this.imgPath = imgPath;
  this.imgTimesShown = 0;
  this.imgTimesClicked = 0;
  OddDuckProducts.allProducts.push(this);

}

let babySweep = new OddDuckProducts('baby-sweep', 'img/baby-sweep.png');
let banana = new OddDuckProducts('banana', 'img/banana.jpg');
let bathroom = new OddDuckProducts('bathroom', 'img/bathroom.jpg');
let boots = new OddDuckProducts('boots', 'img/boots.jpg');
let breakfast = new OddDuckProducts('breakfast', 'img/breakfast.jpg');
let bubblegum = new OddDuckProducts('bubblegum', 'img/bubblegum.jpg');
let chair = new OddDuckProducts('chair', 'img/chair.jpg');
let cthulu = new OddDuckProducts('cthulu', 'img/cthulu.jpg');
let dogDuck = new OddDuckProducts('dog-duck', 'img/dog-duck.jpg');
let dragon = new OddDuckProducts('dragon', 'img/dragon,jpg');
let pen = new OddDuckProducts('pen', 'img/pen.jpg');
let petSweep = new OddDuckProducts('pet-sweep', 'img/pet-sweep.jpg');
let r2bag = new OddDuckProducts('r2bag', 'img/r2bag.jpg');
let scissors = new OddDuckProducts('scissors', 'img/scissors.jpg');
let shark = new OddDuckProducts('shark', 'img/shark.jpg');
let tauntaun = new OddDuckProducts('tauntaun', 'img/tauntaun.jpg');
let unicorn = new OddDuckProducts('unicorn', 'img/unicorn.jpg');
let waterCan = new OddDuckProducts('water-can', 'img/water-can.jpg');
let wineGlass = new OddDuckProducts('wine-glass', 'img/wine-glass.jpg');


console.log(OddDuckProducts.allProducts);

// Create an algorithm that randomly generates 3 unique product images from the img directory and display them side-by-side in the browser window

//Get image elements from the DOM

let product1Img = document.getElementById('product1');
let product2Img = document.getElementById('product2');
let product3Img = document.getElementById('product3');

// Random number generator to select imgs from array

function createRandomProduct(){
  let randProduct1 = Math.floor(Math.random() * OddDuckProducts.allProducts.length);
  let randProduct2 = Math.floor(Math.random()* OddDuckProducts.allProducts.length);
  let randProduct3 = Math.floor(Math.random() * OddDuckProducts.allProducts.length);

  console.log(randProduct1, randProduct2, randProduct3);
}

createRandomProduct();

// Attach an Event Listener to the section of the HTML page where images are displayed.



// Generate 3 new random products after user click.
