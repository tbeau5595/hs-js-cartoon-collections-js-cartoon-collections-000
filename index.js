function dwarfRollCall(dwarves) {
<<<<<<< HEAD
  let dwarvesNamesandNumbers = [];
  
  for (let i = 0; i < dwarves.length; i++) {
     dwarvesNamesandNumbers.push([i+1] +". " + dwarves[i] + " ");
   }
     return dwarvesNamesandNumbers.join("");
=======
  let dwarvesNamesandNumbers = []
  
  for (let i = 0; i < dwarves.length; i++) {
      dwarvesNamesandNumbers.push(`${i + 1} ${dwarves[i]}`);
    }
     return (`${dwarvesNamesandNmbers.join(',')}`);
>>>>>>> c72133bf2d29bb296a2d1f42c8b0017481c8a1dc
}

function summonCaptainPlanet(planeteerCalls) {
  var planet = [];
<<<<<<< HEAD
   for (let i = 0; i < planeteerCalls.length; i++){
     planet.push(`${planeteerCalls[i]}`.toUpperCase() + "!");
=======
   for (var i = 0; i < planeteerCalls.length; i++){
     planet.push(`${planeteerCalls[i]}`.toUpperCase() + "!")
>>>>>>> c72133bf2d29bb296a2d1f42c8b0017481c8a1dc
   }
   return planet;
  
}

function longPlaneteerCalls(words) {
<<<<<<< HEAD
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
=======
  
}

function findTheCheese (foods) {
  let cheeses = [gouda, cheddar];
  
  for (let i = 0; i < foods.length; i++) {
    if (foods[i].includes(cheeses[i]))
    
}
>>>>>>> c72133bf2d29bb296a2d1f42c8b0017481c8a1dc
