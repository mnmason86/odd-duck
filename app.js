'use-strict';
//Global Variables

let currentClicks = 0;
let totalClicksAllowed = 25;
let randomImages = [];

// Create a constructor function that creates an object associated with each product

function OddDuckProduct(name, imgPath){
  this.name = name;
  this.imgPath = imgPath;
  this.imgTimesShown = 0;
  this.imgTimesClicked = 0;
}
let allProducts = [
  new OddDuckProduct('baby-sweep', 'img/baby-sweep.jpg'),
  new OddDuckProduct('banana', 'img/banana.jpg'),
  new OddDuckProduct('bathroom', 'img/bathroom.jpg'),
  new OddDuckProduct('boots', 'img/boots.jpg'),
  new OddDuckProduct('breakfast', 'img/breakfast.jpg'),
  new OddDuckProduct('bubblegum', 'img/bubblegum.jpg'),
  new OddDuckProduct('chair', 'img/chair.jpg'),
  new OddDuckProduct('cthulhu', 'img/cthulhu.jpg'),
  new OddDuckProduct('dog-duck', 'img/dog-duck.jpg'),
  new OddDuckProduct('dragon', 'img/dragon.jpg'),
  new OddDuckProduct('pen', 'img/pen.jpg'),
  new OddDuckProduct('pet-sweep', 'img/pet-sweep.jpg'),
  new OddDuckProduct('r2bag', 'img/r2bag.jpg'),
  new OddDuckProduct('scissors', 'img/scissors.jpg'),
  new OddDuckProduct('shark', 'img/shark.jpg'),
  new OddDuckProduct('tauntaun', 'img/tauntaun.jpg'),
  new OddDuckProduct('unicorn', 'img/unicorn.jpg'),
  new OddDuckProduct('water-can', 'img/water-can.jpg'),
  new OddDuckProduct('wine-glass', 'img/wine-glass.jpg'),
];

// Random number generator to select imgs from array

function createRandomProducts(){
  let randProduct = Math.floor(Math.random() * allProducts.length);
  return allProducts[randProduct];
}

randomImages.push(createRandomProducts());
randomImages.push(createRandomProducts());
randomImages.push(createRandomProducts());

// Create render method for 1 image

OddDuckProduct.prototype.render = function(){
  let bodyContainer = document.getElementById('product-images');
  let imgContainer = document.createElement('img');
  imgContainer.src = this.imgPath;
  bodyContainer.appendChild(imgContainer);
  imgContainer.width = 300;
};

//Loop through randomImages array to call render method

for(let i = 0; i < randomImages.length; i++){
  let randomImage = randomImages[i];
  randomImage.render();
}

// Attach an Event Listener to the section of the HTML page where images are displayed.

// Generate 3 new random products after user click.
