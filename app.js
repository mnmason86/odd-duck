'use-strict';
//Global Variables

let currentClicks = 0;
let totalClicksAllowed = 25;

// Create a constructor function that creates an object associated with each product

function OddDuckProduct(name, imgPath){
  this.name = name;
  this.imgPath = imgPath;
  this.imgTimesShown = 0;
  this.imgTimesClicked = 0;
}

OddDuckProduct.prototype.render = function(n){

  let imgContainer = document.getElementById(`image${n}`);
  imgContainer.src = this.imgPath;
};

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
// Create render method for 1 image

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

function clickHandler(n){
  let imgContainer = document.getElementById(`image${n}`);
  imgContainer.addEventListener('click', function(){
    console.log(`Clicked item ${n}`);
    shownProducts[n].imgTimesClicked++;
    generateAndRenderImage();

  });
}
clickHandler(0);
clickHandler(1);
clickHandler(2);

// Render voting data to page via a list

// function renderList(){
//   let bodyContainer = document.getElementById('vote-list');
//   for(let i = 0; i < allProducts.length, i++;){
//     let product = allProducts[i];
//     let listItem = document.createElement('li');
//     listItem.innerText = product.name.value;
//     bodyContainer.appendChild(listItem);
//   }
// }

