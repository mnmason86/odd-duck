'use-strict';

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

// Render method

OddDuckProduct.prototype.render = function(n){

  let imgContainer = document.getElementById(`image${n}`);
  imgContainer.src = this.imgPath;
};

// Random number generator to select imgs from array

function createRandomProducts(){
  let randProduct = Math.floor(Math.random() * allProducts.length);
  return allProducts[randProduct];
}

// Generate 3 unique products

function generateUniqueIndex(){
  let uniqueIndexNumbers = [];
  while (uniqueIndexNumbers.length < 3){
    let randomNumber = createRandomProducts();
    if (!uniqueIndexNumbers.includes (randomNumber)){
      uniqueIndexNumbers.push(randomNumber);
    }
  }
  return uniqueIndexNumbers;
}

let shownProducts = [];

//Loop through usedRandomNumbers array to call render method

function generateAndRenderImage(){
  shownProducts = generateUniqueIndex();
  for(let i = 0; i < shownProducts.length; i++){
    let shownProduct = shownProducts[i];

    shownProduct.imgTimesShown++;
    shownProduct.render(i);
  }
}
generateAndRenderImage();

// Function to handle 'View Results' click
let totalClicksAllowed = 25;
let currentClicks = 0;

function clickHandler(n){
  let img = document.getElementById(`image${n}`);
  img.addEventListener('click', onClick);
}

function onClick(event){
  let id = event.target.id;
  if (currentClicks === totalClicksAllowed){
    for(let i = 0; i < 2; i++){
      let img = document.getElementById(`image${i}`);
      img.removeEventListener('click', clickHandler);
    }
    alert('Voting has ended, please View Results.');
  } else {
    currentClicks++;
    shownProducts[`${id[5]}`].imgTimesClicked++;
    generateAndRenderImage();
  }
}

clickHandler(0);
clickHandler(1);
clickHandler(2);

// Render voting data to page via a list

function renderList(){
  let bodyContainer = document.getElementById('vote-list');

  for(let i = 0; i < allProducts.length; i++) {
    let product = allProducts[i];
    let listItem = document.createElement('li');
    listItem.innerText = `${product.name} was clicked ${product.imgTimesClicked} times, and seen ${product.imgTimesShown} times.`;
    bodyContainer.appendChild(listItem);
    // OddDuckProduct.prototype.save();
  }
}

let resultsButton = document.getElementById('view-results');
resultsButton.addEventListener('click', renderList);

//---------------------------------------------------------------

//Implement Local Storage / Persistent data between refreshes/restarts.

// if (localStorage.getItem('savedProduct')){
//   let retrievedProducts = localStorage.getItem('savedProduct');
//   let parsed = JSON.parse(retrievedProducts);

//   let parsedName = parsed.name;
//   let parsedImgPath = parsed.imgPath;
//   let parsedImgTimesShown = parsed.imgTimesShown;
//   let parsedImgTimesClicked = parsed.imgTimesClicked;

//   let parsedProduct = new OddDuckProduct(parsedName, parsedImgPath, parsedImgTimesShown, parsedImgTimesClicked);
//   parsedProduct.render();
// }

// OddDuckProduct.prototype.save = function(){
//   if (localStorage.getItem('savedProducts') === null){
//     let emptyArray = JSON.stringify([]);
//     localStorage.setItem('savedProducts', emptyArray);
//   }

//   let retrievedProducts = localStorage.getItem('savedProducts');
//   retrievedProducts = JSON.parse(retrievedProducts);
//   retrievedProducts.push(this);

//   let savedProducts = JSON.stringify(retrievedProducts);
//   localStorage.setItem('savedProducts', savedProducts);
// };


// OddDuckProduct.prototype.save = function(){

//   JSON.stringify(this);
//   localStorage.setItem('allProducts', allProducts);
//   console.log(this.name);
//   // for(let i = 0; i < allProducts.length; i++){
//   //   let product = allProducts[i];

// };





