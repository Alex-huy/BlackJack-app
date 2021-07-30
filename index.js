let firstCard;
let secondCard;
let sum ;
let hasBlackJack = false
let isAlive = false;
let message = "";
let arrayCards = [];
let player = {
    name: 'huy',
    chips: 1000
};

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById('message-el');
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.querySelector('#sum-el');
// 3. Store the card paragraph in a variable called cardEl
let cardEl = document.querySelector('#cards-el');
let playerEl = document.querySelector('#player-el');
playerEl.textContent = player['name'] + ': ' + player['chips'] + '$';

function getRandom() {
    return Math.floor(Math.random() * 13) +1;
}

function startGame() {
    if (player['chips'] > 0) {
        firstCard = getRandom();
        secondCard = getRandom();
        isAlive = true;
        arrayCards = [firstCard, secondCard];
        sum = firstCard + secondCard;
        renderGame();
    } else {
        messageEl.textContent = "You don't have enough chips to play"
    }
}

function renderGame() {
    sumEl.textContent = 'Sum: ' + sum;
    cardEl.textContent = 'Cards: ' + [...arrayCards];
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent  
    messageEl.textContent = message;
    if (!isAlive) {
        fineChip();
    } else if (hasBlackJack) {
        bonusChip();
    }
}

function bonusChip() {
    player['chips'] += 100;
    playerEl.textContent = player['name'] + ': ' + player['chips'] + '$';
    hasBlackJack = false;
}

function fineChip() {
    player['chips'] -= 300;
    playerEl.textContent = player['name'] + ': ' + player['chips'] + '$';
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandom();
        arrayCards.push(card)
        sum += card;
        renderGame();
    }
}

