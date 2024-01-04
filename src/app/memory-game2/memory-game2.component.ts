import { Component } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-memory-game2',
  templateUrl: './memory-game2.component.html',
  styleUrl: './memory-game2.component.scss'
})
export class MemoryGame2Component {
  cards: Card[] = [
    { imagePath: './assets/images/card1.png', isFlipped: false },
    { imagePath: './assets/images/card2.png', isFlipped: false },
    { imagePath: './assets/images/card3.png', isFlipped: false },
    { imagePath: './assets/images/card1.png', isFlipped: false },
    { imagePath: './assets/images/card2.png', isFlipped: false },
    { imagePath: './assets/images/card3.png', isFlipped: false }
   
  ];

  flippedCards: number[] = [];
  matchedPairs: Card[] = [];
  moves: number = 0;
  misses: number = 0;

  ngOnInit() {
    this.shuffleCards();
  }

  shuffleCards() {
    this.cards = this.shuffle([...this.cards]);
  }

  flipCard(index: number) {
    if (!this.cards[index].isFlipped && this.flippedCards.length < 2) {
      this.cards[index].isFlipped = true;
      this.flippedCards.push(index);

      if (this.flippedCards.length === 2) {
        this.moves++;
        setTimeout(() => this.checkForMatch(), 1000);
      }
    }
  }

  checkForMatch() {
    const [index1, index2] = this.flippedCards;

    if (this.cards[index1].imagePath === this.cards[index2].imagePath) {
      this.matchedPairs.push(this.cards[index1]);
    } else {
      this.misses;
      this.cards[index1].isFlipped = false;
      this.cards[index2].isFlipped = false;
    }

    this.flippedCards = [];

    if (this.matchedPairs.length === this.cards.length / 2) {
      alert('Congratulations! You matched all pairs.');
    }
  }

  private shuffle(array: any[]): any[] {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  resetGame() {
    this.moves = 0;
    this.misses = 0;
    this.shuffleCards();
    this.resetCards();
  }
  private resetCards() {
    this.cards.forEach(card => (card.isFlipped = false));
    this.flippedCards = [];
    this.matchedPairs = [];
  }
}
