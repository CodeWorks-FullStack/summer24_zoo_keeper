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

function drawBen() {
  // get element
  const benElement = document.getElementById('ben')
  // look through the ben element for the first element with the class of stats
  const benStatsElement = benElement.querySelector('.stats')
  console.log('ben', benElement);
  console.log('ben stats', benStatsElement);
  // get object
  const ben = animals.find((animal) => animal.name == 'Ben')
  // update element
  // @ts-ignore
  benStatsElement.innerText = `${ben.name} | ${ben.hungerLevel} | ${ben.mood}`
}

function drawMelchizedek() {
  // get element
  const melchizedekElement = document.getElementById('melchizedek')
  // look through the melchizedek element for the first element with the class of stats
  const melchizedekStatsElement = melchizedekElement.querySelector('.stats')
  console.log('melchizedek', melchizedekElement);
  console.log('melchizedek stats', melchizedekStatsElement);
  // get object
  const melchizedek = animals.find((animal) => animal.name == 'Melchizedek')
  // update element
  // @ts-ignore
  melchizedekStatsElement.innerText = `${melchizedek.name} | ${melchizedek.hungerLevel} | ${melchizedek.mood}`
}
