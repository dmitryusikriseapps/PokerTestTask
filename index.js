const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
const suits = ['diamonds', 'clubs', 'hearts', 'spades'];

const getRandomDeck = numberOfCards => {
    const deck = [];
    for (let i = 0; i < numberOfCards; i++) {
        const randomCard = {
            rank: ranks[getRandomNumber(ranks.length - 1)],
            suit: suits[getRandomNumber(suits.length - 1)],
        };
        if (deck.filter(card => card.rank === randomCard.rank && card.suit === randomCard.suit).length === 0) {
            deck.push(randomCard);
        } else {
            i--;
        }
    }
    return deck.sort((a, b) => {
        let result = 0;
        if (a.rank > b.rank) {
            result = 1;
        } else {
            result = -1;
        }
        return result;
    });
};

const getRandomNumber = max => ((Math.random() * max).toFixed(0));

const isRoyalFlush = deck => {
    let counter = 0;
    for (let i = 0; i < deck.map(item => item.rank).indexOf('T'); i++) {
        let card = deck[i];
        let nextCard = deck[i + 1];
        if (card.rank < nextCard.rank && card.suit === nextCard.suit) {
            counter++;
        } else {
            counter = 0;
        }
    }
    console.log(`royalFlashCounter=${counter}`);
    return counter >= 5;
};

const isFourOfKind = deck => {
    let ranksInfo = [];
    for (let i = 0; i < ranks.length; i++) {
        let rankCount = 0;
        for (let j = 0; j < deck.length; j++) {
            ranks[i] === deck[j].rank && rankCount++;
        }
        ranksInfo.push(rankCount);
    }
    console.log(`fourOfKind: ranksInfo=${ranksInfo}`);
    return ranksInfo.filter(item => item >= 4).length !== 0;
};

const isFlush = deck => {
    let diamondsCounter = 0;
    let clubsCounter = 0;
    let heartsCounter = 0;
    let spadesCounter = 0;

    for (let i = 0; i < deck.length; i++) {
        let card = deck[i];
        if (card.suit === 'diamonds') {
            diamondsCounter++;
        } else if (card.suit === 'clubs') {
            clubsCounter++;
        } else if (card.suit === 'hearts') {
            heartsCounter++;
        } else if (card.suit === 'spades') {
            spadesCounter++;
        }
    }
    console.log(`flush: diamonds=${diamondsCounter}, clubs=${clubsCounter}, heartsCounter=${heartsCounter}, spades=${spadesCounter}`);
    return diamondsCounter >= 5 || clubsCounter >= 5 || heartsCounter >= 5 || spadesCounter >= 5;
};

const isThreeOfKind = deck => {
    let ranksInfo = [];
    for (let i = 0; i < ranks.length; i++) {
        let rankCount = 0;
        for (let j = 0; j < deck.length; j++) {
            ranks[i] === deck[j].rank && rankCount++;
        }
        ranksInfo.push(rankCount);
    }
    console.log(`threeOfKind: ranksInfo=${ranksInfo}`);
    return ranksInfo.filter(item => item >= 3).length !== 0;
};

const deck = getRandomDeck(7);
console.log(deck);
if (isRoyalFlush(deck)) {
    console.log("It's royal flush!");
} else if (isFourOfKind(deck)) {
    console.log("It's four of a kind!")
} else if (isFlush(deck)) {
    console.log("It's flush");
} else if (isThreeOfKind(deck)) {
    console.log("It's three of a kind!")
}
