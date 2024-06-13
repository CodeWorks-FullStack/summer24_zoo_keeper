// ANCHOR global variables
const animals = [
  {
    name: 'Tammy',
    emoji: '🐅',
    hungerLevel: 100,
    mood: '😀'
  },
  {
    name: 'Ben',
    emoji: '🦛',
    hungerLevel: 100,
    mood: '😀'
  },
  {
    name: 'Melchizedek',
    emoji: '🐢',
    hungerLevel: 100,
    mood: '😀'
  }
]

let money = 0


// ANCHOR function definitions
// NOTE no longer needed, wrote reusable drawAnimals
function drawTammy() {
  // ✅ get tammy's html element
  const tammyElement = document.getElementById('tammy')
  console.log('tammy element', tammyElement)
  // querySelector finds the first element with the class of stats in the HTML
  // const tammyStatsElement = document.querySelector('.stats')
  // finds the first element with the class of stats in the tammyElement
  const tammyStatsElement = tammyElement.querySelector('.stats')
  console.log('tammy stats', tammyStatsElement);
  // ✅ get tammy out of the array

  // implied return on function without curly braces
  const tammy = animals.find((animal) => animal.name == 'Tammy')

  // explicit return
  // const tammy = animals.find((animal) => { return animal.name == 'Tammy' })

  console.log('we got tammy!', tammy);
  // update correct parts of html with tammy's properties

  // NOTE ts-ignore ignores the error message on the next line, make sure you test your code still
  // @ts-ignore
  tammyStatsElement.innerText = `${tammy.name} | ${tammy.hungerLevel} | ${tammy.mood}`
}


function drawAnimals() {
  animals.forEach((animal) => {
    const animalElement = document.getElementById(animal.name)
    // console.log('animal element', animalElement);
    const animalStatsElement = animalElement.querySelector('.stats')
    // console.log('animal stats', animalStatsElement);
    // @ts-ignore
    animalStatsElement.innerText = `${animal.name} | ${animal.hungerLevel} | ${animal.mood}`
  })
}

function drawMoney() {
  const moneyElement = document.getElementById('cashMoney')
  // toFixed adds specified amount of decimal places after value (3.00)
  moneyElement.innerText = money.toFixed(2)
  if (money < 0) {
    moneyElement.style.color = 'red'
    // moneyElement.classList.add('text-danger')
  }
}

function feedTammy() {
  // ✅ console log when button is clicked
  console.log('feeding tammy');
  // get tammy out of array
  const tammy = animals.find((animal) => animal.name == 'Tammy')
  // make hunger go up
  tammy.hungerLevel++
  if (tammy.hungerLevel > 100) {
    // NOTE clamp down the value
    tammy.hungerLevel = 100
  }

  console.log('here is tammy', tammy);
  // update HTML
  drawAnimals()
}

function feedAnimal(animalName) {
  const foundAnimal = animals.find((animal) => animal.name == animalName)
  // console.log(`We found an animal with the name of ${animalName}!`, foundAnimal);

  if (foundAnimal.hungerLevel <= 0) {
    // NOTE hard stop the function
    return
  }

  foundAnimal.hungerLevel++
  if (foundAnimal.hungerLevel > 100) {
    // NOTE clamp down value to 100
    foundAnimal.hungerLevel = 100
  }
  drawAnimals()
}

function decreaseAnimalsHunger() {
  // console.log('decreasing animal hunger!');
  animals.forEach((animal) => {
    animal.hungerLevel--


    if (animal.hungerLevel <= 0) {
      // clamp
      animal.hungerLevel = 0
      animal.mood = '💀'
    }

    if (animal.hungerLevel > 0) {
      animal.mood = '😩'
    }

    if (animal.hungerLevel > 20) {
      animal.mood = '☹️'
    }

    if (animal.hungerLevel > 40) {
      animal.mood = '😑'
    }

    if (animal.hungerLevel > 60) {
      animal.mood = '😊'
    }

    if (animal.hungerLevel > 80) {
      animal.mood = '😀'
    }

  })
  drawAnimals()
}

function checkAnimalsMoodAndPayAccordingly() {
  animals.forEach((animal) => {
    switch (animal.mood) {
      case '😀':
        money += 100
        break;

      case '😊':
        money += 80
        break;

      case '😑':
        money += 60
        break;

      case '☹️':
        money += .25
        break;

      case '😩':
        money -= 20
        break;

      default:
        money -= 50
        break;
    }
  })

  drawMoney()
}

function tranquilizeAnimal(animalName) {
  // Does not open context menu when right clicked
  event.preventDefault()

  // NOTE these checks only work because the tranquilizer ALWAYS costs 50. If you have something where the price increases, you might check to see what the price of said thing is....
  if (money < 50) {
    window.alert("YOU ARE TOO BROKE DAWG GET GUD")
    return
  }
  money -= 50

  drawMoney()

  // REVIEW goofy code below, you probably don't need this for the checkpoint
  const animalElement = document.getElementById(animalName)
  // querySelectorAll returns an array of all elements that match selector
  const marqueeElements = animalElement.querySelectorAll('marquee')
  console.log(marqueeElements);
  marqueeElements.forEach((marqueeElement) => {
    marqueeElement.scrollAmount = 2
  })

  // setTimeout call the supplied function after 3000 milliseconds, only once
  setTimeout(() => {
    marqueeElements.forEach((marqueeElement) => {
      marqueeElement.scrollAmount = 10
    })
  }, 3000)
}


// ANCHOR function calls (page load)

drawAnimals()

// NOTE runs the function passed as the first argument every 1000 milliseconds
// setInterval(() => { console.log('running interval') }, 1000)

// the first argument passed to setInterval should be the instructions for what it should call
setInterval(decreaseAnimalsHunger, 500)

setInterval(checkAnimalsMoodAndPayAccordingly, 3000)