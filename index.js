function dwarfRollCall(dwarves) {
  let dwarvesNamesandNumbers = [];
  
  for (let i = 0; i < dwarves.length; i++) {
     dwarvesNamesandNumbers.push([i+1] +". " + dwarves[i] + " ");
   }
     return dwarvesNamesandNumbers.join("");
}

function summonCaptainPlanet(planeteerCalls) {
  var planet = [];
   for (let i = 0; i < planeteerCalls.length; i++){
     planet.push(`${planeteerCalls[i]}`.toUpperCase() + "!");
   }
   return planet;
  
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4 ) {
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  let cheeses = ["gouda", "cheddar"]
  for (let i = 0; i < foods.length; i++) {
      if (foods[i] === cheeses[i]) {
        return foods[i];
      }
  }
  return ("no cheese!");
}