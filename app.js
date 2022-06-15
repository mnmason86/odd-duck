"use-strict";

//Global Variables

let totalClicksAllowed = 25;
let currentClicks = 0;

let shownProducts = [];
let savedProducts = [];
let loadedProducts = [];
let priorIndexNumbers = [];

let resultsButton = document.getElementById("view-results");
resultsButton.addEventListener("click", showChart);

// Create a constructor function that creates an object associated with each product

function OddDuckProduct(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;
  this.imgTimesShown = 0;
  this.imgTimesClicked = 0;
}

let allProducts = [
  new OddDuckProduct("baby-sweep", "img/baby-sweep.jpg"),
  new OddDuckProduct("banana", "img/banana.jpg"),
  new OddDuckProduct("bathroom", "img/bathroom.jpg"),
  new OddDuckProduct("boots", "img/boots.jpg"),
  new OddDuckProduct("breakfast", "img/breakfast.jpg"),
  new OddDuckProduct("bubblegum", "img/bubblegum.jpg"),
  new OddDuckProduct("chair", "img/chair.jpg"),
  new OddDuckProduct("cthulhu", "img/cthulhu.jpg"),
  new OddDuckProduct("dog-duck", "img/dog-duck.jpg"),
  new OddDuckProduct("dragon", "img/dragon.jpg"),
  new OddDuckProduct("pen", "img/pen.jpg"),
  new OddDuckProduct("pet-sweep", "img/pet-sweep.jpg"),
  new OddDuckProduct("r2bag", "img/r2bag.jpg"),
  new OddDuckProduct("scissors", "img/scissors.jpg"),
  new OddDuckProduct("shark", "img/shark.jpg"),
  new OddDuckProduct("tauntaun", "img/tauntaun.jpg"),
  new OddDuckProduct("unicorn", "img/unicorn.jpg"),
  new OddDuckProduct("water-can", "img/water-can.jpg"),
  new OddDuckProduct("wine-glass", "img/wine-glass.jpg"),
];

// Render method

OddDuckProduct.prototype.render = function (n) {
  let imgContainer = document.getElementById(`image${n}`);
  imgContainer.src = this.imgPath;
};

//Implement Local Storage / Persistent data between refreshes/restarts.

function save() {
  for (let i = 0; i < allProducts.length; i++) {
    let product = allProducts[i];
    savedProducts.push(product);
  }
  savedProducts = JSON.stringify(savedProducts);
  localStorage.setItem("productData", savedProducts);
}

function load() {
  let parsedProducts = localStorage.getItem("productData");
  JSON.parse(parsedProducts);

  for (let i = 0; i < allProducts.length; i++) {
    let product = allProducts[i];
    loadedProducts.push(product);

  }
  savedProducts = JSON.stringify(loadedProducts);
  localStorage.setItem("productData", savedProducts);
}

function accessStorage() {
  if (localStorage.getItem("productData")) {
    load();
  } else if (localStorage.getItem("productData") === null) {
    save();
  }
}

// Random number generator to select imgs from array

function createRandomProducts() {
  let randProduct = Math.floor(Math.random() * allProducts.length);
  return allProducts[randProduct];
}

// Generate 3 unique products

function generateUniqueIndex() {
  let uniqueIndexNumbers = [];

  while (uniqueIndexNumbers.length < 3) {
    let randomNumber = createRandomProducts();
    if (!uniqueIndexNumbers.includes(randomNumber) && !priorIndexNumbers.includes(randomNumber)) {
      uniqueIndexNumbers.push(randomNumber);
      priorIndexNumbers.push(randomNumber);
    }
  }
  if (priorIndexNumbers.length === 6){
    priorIndexNumbers.splice(0,3);
  }
  return uniqueIndexNumbers;
}

//Loop through shownProducts arrays to call render method

function generateAndRenderImage() {
  shownProducts = generateUniqueIndex();
  for (let i = 0; i < shownProducts.length; i++) {
    let shownProduct = shownProducts[i];
    shownProduct.imgTimesShown++;
    shownProduct.render(i);
  }
}

generateAndRenderImage();

// Function to handle 'View Results' click

function clickHandler(n) {
  let img = document.getElementById(`image${n}`);
  img.addEventListener("click", onClick);
}

function onClick(event) {
  let id = event.target.id;
  if (currentClicks === totalClicksAllowed) {
    for (let i = 0; i < 2; i++) {
      let img = document.getElementById(`image${i}`);
      img.removeEventListener("click", clickHandler);
    }
    alert("Voting has ended, please View Results.");
  } else {
    currentClicks++;
    shownProducts[`${id[5]}`].imgTimesClicked++;

    generateAndRenderImage();
  }
}

clickHandler(0);
clickHandler(1);
clickHandler(2);

// Create bar graph in Canvas.js =======================================================================

function showChart() {
  accessStorage();
  let ctx = document.getElementById("my-chart").getContext("2d");

  let labels = [];
  let votes = [];
  let views = [];

  for (let i = 0; i < allProducts.length; i++) {
    let product = allProducts[i];
    labels.push(product.name);
    votes.push(product.imgTimesClicked);
    views.push(product.imgTimesShown);
  }

  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of Votes",
          data: votes,
          backgroundColor: ["rgba(255, 99, 132"],
          borderColor: ["rgba(255, 99, 132"],
          borderWidth: 1,
        },
        {
          label: "# of Views",
          data: views,
          backgroundColor: ["rgba(54, 162, 235"],
          borderColor: ["rgba(54, 162, 235"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 12,
        },
      },
    },
  });
}
