'use-strict';
//Global Variables

let currentClicks = 0;
let totalClicksAllowed = 25;
let uniqueIndexNumbers = [];

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

// Create render method for 1 image

OddDuckProduct.prototype.render = function(n){

  let bodyContainer = document.getElementById('product-images');
  let imgContainer = document.getElementById(`image${n}`);
  imgContainer.src = this.imgPath;
  bodyContainer.appendChild(imgContainer);
  imgContainer.addEventListener('click', onImageClick);
  this.imgTimesShown++;
};

// Event Handler method =======>> QUESTION: How do I get the imgTimesClicked to increment??

function onImageClick (event){
  currentClicks++;
  if(currentClicks < totalClicksAllowed){

    let imageClicked = event.target;

    for(let i = 0; i <= allProducts.length; i++){

      if (imageClicked === allProducts[i]){
        allProducts[i].imgTimesClicked++;
        console.log(allProducts[i].imgTimesClicked);
      }
    }
    uniqueIndexNumbers.length = 0;
    generateAndRenderImage();
  }
  if(currentClicks === totalClicksAllowed){
    alert('Thank you for your votes!');
    removeEventListener();
  }
}

// Random number generator to select imgs from array

function createRandomProducts(){
  let randProduct = Math.floor(Math.random() * allProducts.length);
  return allProducts[randProduct];
}

// Generate 3 unique products

function generateUniqueIndex(){
  let x = 3;
  while (uniqueIndexNumbers.length < x){
    let randomNumber = createRandomProducts();
    if (!uniqueIndexNumbers.includes (randomNumber)){
      uniqueIndexNumbers.push(randomNumber);
    }
  }
  return uniqueIndexNumbers;
}

//Loop through usedRandomNumbers array to call render method

function generateAndRenderImage(){
  generateUniqueIndex();
  for(let i = 0; i < uniqueIndexNumbers.length; i++){
    let randomImage = uniqueIndexNumbers[i];
    randomImage.render(i);
  }
}
generateAndRenderImage();

// Render voting data to page via a list

function renderList(){
  let bodyContainer = document.getElementById('vote-list');
  for(let i = 0; i < allProducts.length, i++;){
    let product = allProducts[i];
    let listItem = document.createElement('li');
    listItem.innerText = product.name.value;
    bodyContainer.appendChild(listItem);
  }
}

// Function to handle 'View Results' click

let viewResults = document.getElementById('view-results');
viewResults.addEventListener('click', renderList);



