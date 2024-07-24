import { Injectable } from '@angular/core';
import { Category, Term, TermsMap } from '../constants/data';
import { BehaviorSubject, Observable } from 'rxjs';

enum Player {
  PLAYER_ONE = 'Player One',
  PLAYER_TWO = 'Player Two',
}

type GameResult = {
  gameWon: boolean;
  winner: Player | null;
};

@Injectable({
  providedIn: 'root',
})
export class TermService {
  private category!: Category;
  private _term!: Term;
  private _correctLetters: string[] = [];
  private _wrongLetters: string[] = [];
  private allowedGuesses = 8;
  private wrongGuesses = 0;
  private _health = 100;

  private gameResultSubject = new BehaviorSubject<null | GameResult>(null);
  private _gameResult = this.gameResultSubject.asObservable();

  constructor() {}

  pickTerm(category: Category) {
    this.category = category;
    const index = Math.floor(Math.random() * TermsMap[this.category].length);
    this._term = TermsMap[this.category][index];
    this.resetGame();
    return this._term;
  }

  private resetGame() {
    this.wrongGuesses = 0;
    this._health = 100;
    this._correctLetters = [];
    this._wrongLetters = [];
  }

  chooseLetter(letter: string) {
    if (letter.length != 1 || this.gameResultSubject.value) return;

    if (this._term.name.toLowerCase().includes(letter.toLowerCase())) {
      if (!this.isCorrectLetter(letter)) this._correctLetters.push(letter);
    } else {
      if (!this.isWrongLetter(letter)) this.handleWrongLetter(letter);
    }

    this.updateGameResult();
  }

  handleWrongLetter(letter: string) {
    this._wrongLetters.push(letter);
    this.wrongGuesses++;
    this._health =
      ((this.allowedGuesses - this.wrongGuesses) / this.allowedGuesses) * 100;
  }

  isWrongLetter(letter: string) {
    return this.wrongLetters
      .map((l) => l.toLowerCase())
      .includes(letter.toLowerCase());
  }

  isCorrectLetter(letter: string) {
    return this.correctLetters
      .map((l) => l.toLowerCase())
      .includes(letter.toLocaleLowerCase());
  }

  isUsedLetter(letter: string) {
    return this.isWrongLetter(letter) || this.isCorrectLetter(letter);
  }

  updateGameResult() {
    if (this.checkGameWon())
      this.gameResultSubject.next({ gameWon: true, winner: null });
    else if (this.wrongGuesses == this.allowedGuesses)
      this.gameResultSubject.next({ gameWon: false, winner: null });
    else this.gameResultSubject.next(null);
  }

  checkGameWon() {
    return this.term.name
      .toLocaleLowerCase()
      .split('')
      .every((letter) => this.correctLetters.includes(letter.toLowerCase()));
  }

  get term() {
    return this._term;
  }

  get correctLetters() {
    return this._correctLetters;
  }

  get wrongLetters() {
    return this._wrongLetters;
  }

  get health() {
    return this._health;
  }
  get gameResult() {
    return this._gameResult;
  }
}
