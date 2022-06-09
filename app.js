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

new OddDuckProducts('baby-sweep', 'img/baby-sweep.png');
new OddDuckProducts('banana', 'img/banana.jpg');
new OddDuckProducts('bathroom', 'img/bathroom.jpg');
new OddDuckProducts('boots', 'img/boots.jpg');
new OddDuckProducts('breakfast', 'img/breakfast.jpg');
new OddDuckProducts('bubblegum', 'img/bubblegum.jpg');
new OddDuckProducts('chair', 'img/chair.jpg');
new OddDuckProducts('cthulhu', 'img/cthulu.jpg');
new OddDuckProducts('dog-duck', 'img/dog-duck.jpg');
new OddDuckProducts('dragon', 'img/dragon,jpg');
new OddDuckProducts('pen', 'img/pen.jpg');
new OddDuckProducts('pet-sweep', 'img/pet-sweep.jpg');
new OddDuckProducts('r2bag', 'img/r2bag.jpg');
new OddDuckProducts('scissors', 'img/scissors.jpg');
new OddDuckProducts('shark', 'img/shark.jpg');
new OddDuckProducts('tauntaun', 'img/tauntaun.jpg');
new OddDuckProducts('unicorn', 'img/unicorn.jpg');
new OddDuckProducts('water-can', 'img/water-can.jpg');
new OddDuckProducts('wine-glass', 'img/wine-glass.jpg');

// Create an algorithm that randomly generates 3 unique product images from the img directory and display them side-by-side in the browser window

// Random number generator to select imgs from array

let randomImages = [];

function createRandomProducts(){
  let randProduct = Math.floor(Math.random() * OddDuckProducts.allProducts.length);
  randomImages.push(randProduct);
}
createRandomProducts();
createRandomProducts();
createRandomProducts();

// Attach an Event Listener to the section of the HTML page where images are displayed.

// Generate 3 new random products after user click.

//Get image elements from the DOM and render

OddDuckProducts.prototype.render = function(){
  let bodyContainer = document.getElementById('product-images');
  let imgContainer = document.createElement('img');
  imgContainer.src = `img/${image.name}.jpg`;
  bodyContainer.appendChild(imgContainer);
  imgContainer.width = 300;
};



