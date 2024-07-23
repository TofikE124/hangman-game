import { Injectable } from '@angular/core';
import { Category, Term, TermsMap } from '../../constants/data';

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

  constructor() {}

  pickTerm(category: Category) {
    this.category = category;
    const index = Math.floor(Math.random() * TermsMap[this.category].length);
    this._term = TermsMap[this.category][index];
    return this._term;
  }

  chooseLetter(letter: string) {
    if (letter.length != 1) return;

    if (this._term.name.toLowerCase().includes(letter.toLowerCase())) {
      if (!this.isCorrectLetter(letter)) this._correctLetters.push(letter);
    } else {
      if (!this.isWrongLetter(letter)) this.handleWrongLetter(letter);
    }
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
}
