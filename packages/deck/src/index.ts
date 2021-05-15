export enum Suit {
  Clubs, Hearts, Diamonds, Spades
}

export enum DeckType { 
  Standard,
  Sheephead
}

export enum Standard {
  Ace, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King
}

export enum Sheephead {
  Seven, Eight, Nine, Ten, Jack, Queen, King
}

type Card = [
  Suit, 
  Standard | Sheephead
]

export class Dealer {
  cards: Card[] = []

  constructor() {
    this.cards = this.setDeck()
  }

  setDeck(): Card[] {

  }

  dealCards(numCards: number): Card[] {

  }

  getCardLength(): number { return this.cards.length }

  readCard(card: Card): string {} 

}

DealHand()