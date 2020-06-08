//Objects
//spaceship = object
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
};
  
let propName =  'Active Mission';

let isActive = spaceship['Active Mission']

console.log(spaceship[propName])

//Property Assignments
//We can change the values, add new values or delete values from object keys
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  spaceship.color = 'glorious gold'
  spaceship.numEngines = 5
  delete spaceship['Secret Mission']
  console.log(spaceship)

//Object Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}

alienShip.retreat()
alienShip.takeOff()

//Nested Objects
let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0]
  spaceship.passengers = [{name: 'Space Dog'}]
  let firstPassenger = spaceship.passengers[0]

  //Pass By Reference
  const spaceship = {
    homePlanet : 'Earth',
    color : 'silver'
  };
  
  let paintIt = obj => {
    obj.color = 'glorious gold'
  };
  
  paintIt(spaceship);
  
  spaceship.color // Returns 'glorious gold'