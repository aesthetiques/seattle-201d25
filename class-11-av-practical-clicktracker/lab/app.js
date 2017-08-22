'use strict'

let items = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass']
let catalogue = []
let pictureFrame = document.getElementById('picture-frame')

function CatalogueItem(name, src = '.jpg', clicks = 0, shown = 0){
  this.name = name
  this.src = `${name}${src}`
  this.clicks = clicks
  this.shown = shown
}

for(let item in items){
  let product = new CatalogueItem(items[item])
  catalogue.push(product)
}

const randomizer = () => {
  return Math.floor(Math.random() * items.length)
}

let randomize = () => {
  let newImage = document.createElement('img')
  pictureFrame.appendChild(newImage)
  let previousImages = []
  let currentImages = []
  let image = randomizer()
  console.log(catalogue[image])
  console.log('currentImages:', currentImages)
  for(let i = 0; i < 3; i++){
    while(currentImages.includes(catalogue[image]) || previousImages.includes(catalogue[image])){
      image = randomizer()
    }
    console.log(catalogue[image])
    newImage.src = catalogue[image].
    currentImages.push(catalogue[image])
  }
  console.log('previousImages:', previousImages)
  previousImages = currentImages
  console.log('currentImages:', currentImages)
}

randomize()
