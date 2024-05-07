let cards = [];
 let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let playerEL = document.getElementById("player-el");
let roundEL = document.getElementById("round-el");
let sumEl = document.getElementById("sum-el");
let cardsEL = document.getElementById("cards-el");
let initial = 2000

function randomNumber() {
    let getRandomNumber = Math.floor(Math.random() * 11) + 1;
    if (getRandomNumber > 10) {
        return 10; 
    } else if (getRandomNumber === 1) {
        return 11; 
    } else {
        return getRandomNumber;
    }
}

function startGame() {
    let firstCard = randomNumber();
    let secondCard = randomNumber();
    cards = [firstCard, secondCard]; // Store cards as numbers in the array
    sum = firstCard + secondCard; // Calculate sum
    renderGame();
}

function renderGame() {
    cardsEL.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        playerEL.textContent = "Tonnel: $" + initial;
        isAlive = true;
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        initial += 500
        playerEL.textContent = "Tonnel: $" + initial;
        isAlive = true
    } else {
        message = "You're out of the game!";
        initial -= 50
        playerEL.textContent = "Tonnel: $" + initial;
        hasBlackJack = false;
        isAlive = false;
    }
    roundEL.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = randomNumber();
        sum += card; 
        cards.push(card); 
        initial += 0
        initial += 0
        playerEL.textContent = "Tonnel: $" + initial;
        return renderGame();
    }
} 



/* 
 let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let roundEL = document.getElementById("round-el")
let sumEl = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")


 function randomNumber(){
    let getRandomNumber = Math.floor( Math.random()*13 ) + 1
    if (getRandomNumber > 10){
        return "11"
    }else if (getRandomNumber === 1){
        return "12"
    }else{
        return getRandomNumber
    }
}

function startGame(){
    let firstCard = randomNumber()
    let secondCard = randomNumber()
    cards = [firstCard + " " + secondCard + " "]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEL.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " " 
}
sumEl.textContent = "Sum: " + sum;
if (sum <= 20) {
    message = "Do you want to draw a new card?"
    isAlive = true
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}
    roundEL.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = randomNumber()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
  */