// ANCHOR global variables
const animals = [
  {
    name: 'Tammy',
    emoji: '🐅',
    hungerLevel: 99,
    mood: '😀'
  },
  {
    name: 'Ben',
    emoji: '🦛',
    hungerLevel: 80,
    mood: '😊'
  },
  {
    name: 'Melchizedek',
    emoji: '🐢',
    hungerLevel: 20,
    mood: '😑'
  }
]


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
    console.log('animal element', animalElement);
    const animalStatsElement = animalElement.querySelector('.stats')
    console.log('animal stats', animalStatsElement);
    // @ts-ignore
    animalStatsElement.innerText = `${animal.name} | ${animal.hungerLevel} | ${animal.mood}`
  })
}


// ANCHOR function calls (page load)

drawAnimals()