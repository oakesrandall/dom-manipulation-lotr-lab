console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  var middleEarthSection = document.createElement("section");
  middleEarthSection.setAttribute("id", "middle-earth");
  for (var i = 0; i < lands.length; i++) {
    var x = document.createTextNode(lands[i]);
    var j = document.createElement("h1");
    j.appendChild(x);
    var h = document.createElement("article");
    h.appendChild(j);
    middleEarthSection.appendChild(h);
  }
  body.appendChild(middleEarthSection);




  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {

  var theShire = document.querySelector("article");
  var unorderedListOfHobbits = document.createElement("ul");
  for (var i = 0; i < hobbits.length; i++) {
    var hobbitListItems = document.createElement("li");
    hobbitListItems.innerHTML = hobbits[i];
    hobbitListItems.setAttribute("class", "hobbit");
    unorderedListOfHobbits.appendChild(hobbitListItems);
    
  }
  
  theShire.appendChild(unorderedListOfHobbits);
  
  
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
}


// Part 3

function keepItSecretKeepItSafe() {

  var ring = document.createElement('div');
  ring.setAttribute("id", "the-ring");
 
  var frodo = document.querySelector('.hobbit');
  frodo.appendChild(ring);

  ring.className = "magic-imbued-jewelry";
  
  document.querySelector("#the-ring").addEventListener("click", nazgulScreech);
  

}
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo


// Part 4


function makeBuddies() {
  var unorderedList = document.createElement("ul");
  var asideDiv = document.createElement("aside");
  for (var i = 0; i < buddies.length; i++) {
    var tempBuddy = document.createTextNode(buddies[i]);
    var listItem = document.createElement("li");
    listItem.appendChild(tempBuddy);
    unorderedList.appendChild(listItem);
  }
  asideDiv.appendChild(unorderedList);
  var rivendell = document.querySelectorAll("article")[1];
  rivendell.appendChild(asideDiv);
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}


// Part 5


function beautifulStranger() {

  var strider = document.querySelectorAll("li")[7];
  strider.innerHTML = "Aragorn";
}
  // change the 'Strider' textnode to 'Aragorn'



// Part 6
//NOT WORKING YET
function leaveTheShire() {
  var hobbits = document.querySelectorAll(".hobbit");
  var rivendell = document.querySelectorAll("article")[1];
  console.log(hobbits);
  console.log(rivendell);
  for (var i = 0; i < hobbits.length; i++) {
    rivendell.appendChild(hobbits[i]);
  }
//   // rivendell.appendChild(hobbits);
//   // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {

  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
 // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
