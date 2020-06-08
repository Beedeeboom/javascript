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
  