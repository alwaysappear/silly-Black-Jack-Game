let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.querySelector(".cards-el")

let player = {name: "Always Appear", chip: 89}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chip

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

function renderGame() {
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message = "You've got a Blackjack!"
        hasBlackJack = true
    } else {
        message = "Your're out of the game!"
        isAlive = false
    }
    cardsEl.textContent = "Cards: "
    for(let c = 0; c < cards.length; c++){
        cardsEl.textContent += cards[c] + " "
    }
    // cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1]
    document.getElementById("sum-el").textContent = "Sum: " + (sum)
    messageEl.textContent = message;
}

function newCard(){
    if (isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}