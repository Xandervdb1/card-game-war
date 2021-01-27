let deck = [];
let cardsP1 = [];
let cardsP2 = [];
let restCardsP1 = [];
let restCardsP2 = [];
let tieCards = [];

let chosenCardP1;
let chosenCardP2;
let winner;
let win = false;

let p1Chose = false;
let p2Chose = false;
let round1 = true;

let btns = document.querySelectorAll(".card");
let btnsP1 = document.querySelectorAll(".p1");
let btnsP2 = document.querySelectorAll(".p2");

let p1Choice = document.querySelector(".p1Card");
let p2Choice = document.querySelector(".p2Card");

let player1title = document.querySelector(".player1Title");
let player2title = document.querySelector(".player2Title");
let h1 = document.querySelector("h1");

createDeck();
console.log("start deck " + deck);

shuffleDeck(deck);
randomP1Cards(deck);
randomP2Cards(deck);
newChoice();

console.log("start cards p1 " + cardsP1);
console.log("start cards p2 " + cardsP2);
console.log("deck after startcards " + deck);



function createDeck() {
    for (let i = 0; i < 52; i++) {
        if (i < 13) {
            let card = "H"+(i+1);
            deck.push(card);
        } else if (i > 12 && i < 26) {
            let card = "D"+((i-13)+1);
            deck.push(card);
        } else if (i > 25 && i < 39) {
            let card = "S"+((i-26)+1);
            deck.push(card);
        } else if (i > 38 && i < 52) {
            let card = "C"+((i-39)+1);
            deck.push(card);
        }
    }
}

function shuffleDeck(deck) {
    var currentIndex = deck.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporaryValue;
    }
}

function randomP1Cards() {
    for (let i = 0; i < 3; i++) {
        let card = deck[i];
        deck.splice(i, 1);
        cardsP1.push(card);
    }
}

function randomP2Cards() {
    for (let i = 0; i < 3; i++) {
        let card = deck[i+3];
        deck.splice(i+3, 1);
        cardsP2.push(card);
    }
}

function newChoice() {
    if (round1 == true) {    
        
        btns.forEach(item => {
            item.addEventListener("click", choseCard)
        });   

        function choseCard(e){
            switch (e.target.classList[2]) {
                case "card1P1":
                    document.querySelector(".card1P1").src = "images/empty.png"
                    let img1P1 = document.createElement("img");
                    img1P1.src = "images/"+cardsP1[0]+".png"
                    img1P1.classList.add("card");
                    p1Choice.append(img1P1);
                    chosenCardP1 = cardsP1[0];
                    cardsP1.splice(0,1);
                    btnsP1.forEach(item => {
                        item.removeEventListener("click", choseCard);
                    });
                    p1Chose = true;
                    bothChosenCheck();
                    break;
                case "card2P1":
                    document.querySelector(".card2P1").src = "images/empty.png"
                    let img2P1 = document.createElement("img");
                    img2P1.src = "images/"+cardsP1[1]+".png"
                    img2P1.classList.add("card");
                    console.log(img2P1);
                    p1Choice.append(img2P1);
                    chosenCardP1 = cardsP1[1];
                    cardsP1.splice(1,1);
                    btnsP1.forEach(item => {
                        item.removeEventListener("click", choseCard);
                    });
                    p1Chose = true;
                    bothChosenCheck();
                    break;
                case "card3P1":
                    document.querySelector(".card3P1").src = "images/empty.png"
                    let img3P1 = document.createElement("img");
                    img3P1.src = "images/"+cardsP1[2]+".png"
                    img3P1.classList.add("card");
                    console.log(img3P1);
                    p1Choice.append(img3P1);
                    chosenCardP1 = cardsP1[2];
                    cardsP1.splice(2,1);
                    btnsP1.forEach(item => {
                        item.removeEventListener("click", choseCard);
                    });
                    p1Chose = true;
                    bothChosenCheck();
                    break;
                case "card1P2":
                    document.querySelector(".card1P2").src = "images/empty.png"
                    let img1P2 = document.createElement("img");
                    img1P2.src = "images/"+cardsP2[0]+".png"
                    img1P2.classList.add("card");
                    console.log(img1P2);
                    p2Choice.append(img1P2);
                    chosenCardP2 = cardsP2[0];
                    cardsP2.splice(0,1);
                    btnsP2.forEach(item => {
                        item.removeEventListener("click", choseCard);
                    });
                    p2Chose = true;
                    bothChosenCheck();
                    break;
                case "card2P2":
                    document.querySelector(".card2P2").src = "images/empty.png"
                    let img2P2 = document.createElement("img");
                    img2P2.src = "images/"+cardsP2[1]+".png"
                    img2P2.classList.add("card");
                    console.log(img2P2);
                    p2Choice.append(img2P2);
                    chosenCardP2 = cardsP2[1];
                    cardsP2.splice(1,1);
                    btnsP2.forEach(item => {
                        item.removeEventListener("click", choseCard);
                    });
                    p2Chose = true;
                    bothChosenCheck();
                    break;
                case "card3P2":
                    document.querySelector(".card3P2").src = "images/empty.png"
                    let img3P2 = document.createElement("img");
                    img3P2.src = "images/"+cardsP2[2]+".png"
                    img3P2.classList.add("card");
                    console.log(img3P2);
                    p2Choice.append(img3P2);
                    chosenCardP2 = cardsP2[2];
                    cardsP2.splice(2,1);
                    btnsP2.forEach(item => {
                        item.removeEventListener("click", choseCard);
                    });
                    p2Chose = true;
                    bothChosenCheck();
                    break;
                default:
                    console.log("default");
            }
                console.log("cards after picking p1 " + cardsP1);
                console.log("cards after picking p2 " + cardsP2);
        }        
    } else {
        p1Chose = false;
        p2Chose = false;

        if (winner == "p1") {
            cardsP1.push(deck[0]);
            deck.splice(0,1);
            cardsP2.push(deck[0]);
            deck.splice(0,1);
            if(cardsP1[2] == undefined || cardsP2[2] == undefined) {
                deleteThirdButton();
            }
            if(cardsP1[1] == undefined || cardsP2[1] == undefined) {
                deleteSecondButton();
            }
            if(cardsP1[0] == undefined || cardsP2[0] == undefined) {
                deleteFirstButton();
            }
            winner = null;
        } else if (winner == "p2") {
            cardsP2.push(deck[0]);
            deck.splice(0,1);
            cardsP1.push(deck[0]);
            deck.splice(0,1);
            if(cardsP1[2] == undefined || cardsP2[2] == undefined) {
                deleteThirdButton();
            }
            if(cardsP1[1] == undefined || cardsP2[1] == undefined) {
                deleteSecondButton();
            }
            if(cardsP1[0] == undefined || cardsP2[0] == undefined) {
                deleteFirstButton();
            }
            winner = null;
        } else if (winner == "tie") {
            if(cardsP1.length == 0) {
                checkWinner();
            } else {
                let random = getRandomInt(1,2);
                if (random == 1) {
                    cardsP1.push(deck[0]);
                    deck.splice(0,1);
                    cardsP2.push(deck[0]);
                    deck.splice(0,1);
                    if(cardsP1[2] == undefined || cardsP2[2] == undefined) {
                        deleteThirdButton();
                    }
                    if(cardsP1[1] == undefined || cardsP2[1] == undefined) {
                        deleteSecondButton();
                    }
                    if(cardsP1[0] == undefined || cardsP2[0] == undefined) {
                        deleteFirstButton();
                    }
                    winner = null;              
                } else if (random == 2) {
                    cardsP2.push(deck[0]);
                    deck.splice(0,1);
                    cardsP1.push(deck[0]);
                    deck.splice(0,1);
                    if(cardsP1[2] == undefined || cardsP2[2] == undefined) {
                        deleteThirdButton();
                    }
                    if(cardsP1[1] == undefined || cardsP2[1] == undefined) {
                        deleteSecondButton();
                    }
                    if(cardsP1[0] == undefined || cardsP2[0] == undefined) {
                        deleteFirstButton();
                    }
                    winner = null;
                } 
            }

        }

        btns.forEach(item => {
            item.addEventListener("click", choseCard)
        });   
    
        function choseCard(e){
            switch (e.target.classList[2]) {
                case "card1P1":
                    document.querySelector(".card1P1").src = "images/empty.png"
                    let img1P1 = document.createElement("img");
                    img1P1.src = "images/"+cardsP1[0]+".png"
                    img1P1.classList.add("card");
                    console.log(img1P1);
                    p1Choice.append(img1P1);
                    chosenCardP1 = cardsP1[0];
                    cardsP1.splice(0,1);
                    btnsP1.forEach(item => {
                        item.removeEventListener("click", choseCard);
                    });
                    p1Chose = true;
                    bothChosenCheck();
                    break;
                case "card2P1":
                    document.querySelector(".card2P1").src = "images/empty.png"
                    let img2P1 = document.createElement("img");
                    img2P1.src = "images/"+cardsP1[1]+".png"
                    img2P1.classList.add("card");
                    console.log(img2P1);
                    p1Choice.append(img2P1);
                    chosenCardP1 = cardsP1[1];
                    cardsP1.splice(1,1);
                    btnsP1.forEach(item => {
                        item.removeEventListener("click", choseCard);
                    });
                    p1Chose = true;
                    bothChosenCheck();
                    break;
                case "card3P1":
                    document.querySelector(".card3P1").src = "images/empty.png"
                    let img3P1 = document.createElement("img");
                    img3P1.src = "images/"+cardsP1[2]+".png"
                    img3P1.classList.add("card");
                    console.log(img3P1);
                    p1Choice.append(img3P1);
                    chosenCardP1 = cardsP1[2];
                    cardsP1.splice(2,1);
                    btnsP1.forEach(item => {
                        item.removeEventListener("click", choseCard);
                    });
                    p1Chose = true;
                    bothChosenCheck();
                    break;
                case "card1P2":
                    document.querySelector(".card1P2").src = "images/empty.png"
                    let img1P2 = document.createElement("img");
                    img1P2.src = "images/"+cardsP2[0]+".png"
                    img1P2.classList.add("card");
                    console.log(img1P2);
                    p2Choice.append(img1P2);
                    chosenCardP2 = cardsP2[0];
                    cardsP2.splice(0,1);
                    btnsP2.forEach(item => {
                        item.removeEventListener("click", choseCard);
                    });
                    p2Chose = true;
                    bothChosenCheck();
                    break;
                case "card2P2":
                    document.querySelector(".card2P2").src = "images/empty.png"
                    let img2P2 = document.createElement("img");
                    img2P2.src = "images/"+cardsP2[1]+".png"
                    img2P2.classList.add("card");
                    console.log(img2P2);
                    p2Choice.append(img2P2);
                    chosenCardP2 = cardsP2[1];
                    cardsP2.splice(1,1);
                    btnsP2.forEach(item => {
                        item.removeEventListener("click", choseCard);
                    });
                    p2Chose = true;
                    bothChosenCheck();
                    break;
                case "card3P2":
                    document.querySelector(".card3P2").src = "images/empty.png"
                    let img3P2 = document.createElement("img");
                    img3P2.src = "images/"+cardsP2[2]+".png"
                    img3P2.classList.add("card");
                    console.log(img3P2);
                    p2Choice.append(img3P2);
                    chosenCardP2 = cardsP2[2];
                    cardsP2.splice(2,1);
                    btnsP2.forEach(item => {
                        item.removeEventListener("click", choseCard);
                    });
                    p2Chose = true;
                    bothChosenCheck();
                    break;
                default:
                    console.log("default");
            }
            console.log("cards after picking p1 " + cardsP1);
            console.log("cards after picking p2 " + cardsP2);
        }
        if (win == false) {
            updateDeckCards();            
        }

        console.log("deck after a round " + deck);
        updatePlayerBank();
        console.log("cards in bank p1 " +restCardsP1);
        console.log("cards in bank p2 " +restCardsP2);
    }

}

function bothChosenCheck() {
    if (p1Chose == true && p2Chose == true) {
        resultP1 = parseInt(chosenCardP1.replace(/\D/g,''));
        resultP2 = parseInt(chosenCardP2.replace(/\D/g,''));        
        
        if (resultP1 == resultP2) {
            player1title.style.color = "blue";
            player2title.style.color = "blue";
            h1.innerHTML = "It's a tie! </br> Pick again"
            winner = "tie";
            round1 = false;
            setTimeout(function(e){
                btns.forEach(item => {
                    item.src = "images/back.png";
                });
                tieCards.push(chosenCardP1);
                tieCards.push(chosenCardP2);
                player1title.style.color = "black";
                player2title.style.color = "black";
                if (win == false) {
                    updateDeckCards();
                }
                p1Choice.innerHTML = "";
                p2Choice.innerHTML = "";
                console.log("deck of tiecards when there's a tie " + tieCards)
                newChoice();
            }, 2000);
        } else if (resultP1 == 1) {
            player1title.style.color = "yellow";
            h1.innerHTML = "Player 1 won </br> &nbsp;"
            winner = "p1";
            round1 = false;
            setTimeout(function(e){
                while (tieCards.length > 0) {
                    for (let i = 0; i < tieCards.length; i++) {
                        restCardsP2.push(tieCards[i]);
                        tieCards.splice(i,1);
                    }
                    console.log("tiecard na leegmaken" + tieCards);
                }
                btns.forEach(item => {
                    item.src = "images/back.png";
                });
                restCardsP2.push(chosenCardP1);
                restCardsP2.push(chosenCardP2);
                player1title.style.color = "black";
                if (win == false) {
                    updateDeckCards();
                }
                p1Choice.innerHTML = "";
                p2Choice.innerHTML = "";
                newChoice();
            }, 2000)
        } else if (resultP2 == 1) {
            player2title.style.color = "yellow";
            h1.innerHTML = "Player 2 won </br> &nbsp;"
            winner = "p2";
            round1 = false;
            setTimeout(function(e){
                while (tieCards.length > 0) {
                    for (let i = 0; i < tieCards.length; i ++) {
                        restCardsP1.push(tieCards[i]);
                        tieCards.splice(i,1);
                    }
                    console.log("tiecard na leegmaken" + tieCards);
                }
                btns.forEach(item => {
                    item.src = "images/back.png";
                });
                restCardsP1.push(chosenCardP1);
                restCardsP1.push(chosenCardP2);
                player2title.style.color = "black";
                if (win == false) {
                    updateDeckCards();
                }
                p1Choice.innerHTML = "";
                p2Choice.innerHTML = "";
                newChoice();
            }, 2000)
        } else if (resultP1 > resultP2) {
            player1title.style.color = "yellow";
            h1.innerHTML = "Player 1 won </br> &nbsp;"
            winner = "p1";
            round1 = false;
            setTimeout(function(e){
                while (tieCards.length > 0) {
                    for (let i = 0; i < tieCards.length; i++) {
                        restCardsP2.push(tieCards[i]);
                        tieCards.splice(i,1);
                    }
                    console.log("tiecard na leegmaken" + tieCards);
                }
                btns.forEach(item => {
                    item.src = "images/back.png";
                });
                restCardsP2.push(chosenCardP1);
                restCardsP2.push(chosenCardP2);
                player1title.style.color = "black";
                if (win == false) {
                    updateDeckCards();
                }
                p1Choice.innerHTML = "";
                p2Choice.innerHTML = "";
                newChoice();
            }, 2000)
        } else if (resultP2 > resultP1) {
            player2title.style.color = "yellow";
            h1.innerHTML = "Player 2 won </br> &nbsp;"
            winner = "p2";
            round1 = false;
            setTimeout(function(e){
                while (tieCards.length > 0) {
                    for (let i = 0; i < tieCards.length; i ++) {
                        restCardsP1.push(tieCards[i]);
                        tieCards.splice(i,1);
                    }
                    console.log("tiecard na leegmaken" + tieCards);
                }
                btns.forEach(item => {
                    item.src = "images/back.png";
                });
                restCardsP1.push(chosenCardP1);
                restCardsP1.push(chosenCardP2);
                player2title.style.color = "black";
                if (win == false) {
                    updateDeckCards();
                }
                p1Choice.innerHTML = "";
                p2Choice.innerHTML = "";
                newChoice();
            }, 2000)
        } 
    }
}

function checkWinner(){
    win = true;
    console.log(restCardsP1.length);
    console.log(restCardsP2.length);
    if (restCardsP1.length > restCardsP2.length) {
        h1.innerHTML = "Player 2 wins the game </br> Congrats!";
        player2title.style.color = "yellow";
        player1title.style.color = "grey";
    } else if (restCardsP2.length > restCardsP1.length) {
        h1.innerHTML = "Player 1 wins the game </br> Congrats!";
        player1title.style.color = "yellow";
        player2title.style.color = "grey";
    } else if (restCardsP1.length == restCardsP2.length) {
        h1.innerHTML = "It's a tie! Congrats to both of you!"
        player2title.style.color = "yellow";
        player1title.style.color = "yellow";
    }
}

function deleteThirdButton() {
    let card3p1 = document.querySelector(".card3P1");
    let card3p2 = document.querySelector(".card3P2");

    card3p1.style.display = "none";
    card3p2.style.display = "none";
}

function deleteSecondButton() {
    let card2p1 = document.querySelector(".card2P1");
    let card2p2 = document.querySelector(".card2P2");

    card2p1.style.display = "none";
    card2p2.style.display = "none";
}

function deleteFirstButton() {
    let card1p1 = document.querySelector(".card1P1");
    let card1p2 = document.querySelector(".card1P2");

    card1p1.style.display = "none";
    card1p2.style.display = "none";

    checkWinner();
}

function updatePlayerBank() {
    let lostTroopsP1 = document.querySelector(".lostTroopsP1");
    let lostTroopsP2 = document.querySelector(".lostTroopsP2");
    if ((restCardsP1.length/2) < 2) {
        lostTroopsP1.innerHTML = "Lost troop: "+(restCardsP1.length/2);
    } else {
        lostTroopsP1.innerHTML = "Lost troops: "+(restCardsP1.length/2);
    }
    if ((restCardsP2.length/2) < 2) {
        lostTroopsP2.innerHTML = "Lost troop: "+(restCardsP2.length/2);
    } else {
        lostTroopsP2.innerHTML = "Lost troops: "+(restCardsP2.length/2);
    }
}

function updateDeckCards() {
    h1.innerHTML = "Pick a card </br>(cards in deck: "+deck.length+")";

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}