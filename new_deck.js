var Card = function (suit, value) { 
	this.suit = suit;  
  this.value = value; 
  this.displayValue = (function(value, suit) {
  switch(value){
  	case 1:
    	return `Ace of ${suit}`;
    case 11:
     return `Jack of ${suit}`;
    case 12:
    	return `Queen of  ${suit}`;
    case 13:
     return `King of ${suit}`;
  	default:
     return `${value} of ${suit}`;}
  })(value, suit);
 }

const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts']
let deck = []

for (i = 1; i<14; i++){
  let tempCard = new Card(suits[0], i);
  deck.push(tempCard)
 	tempCard = new Card(suits[1], i)
  deck.push(tempCard)
   	tempCard = new Card(suits[2], i)
  deck.push(tempCard)
   	tempCard = new Card(suits[3], i)
  deck.push(tempCard)
}

// borrowed from SO...
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
deck = shuffle(deck)

console.log(deck[Math.floor(Math.random() * deck.length)])
console.log(deck[Math.floor(Math.random() * deck.length)])
