import { Injectable } from '@angular/core';
import { Category, Term, TermsMap } from '../constants/data';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sound, SoundService } from './sound.service';
import confetti from 'canvas-confetti';

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

  constructor(private soundService: SoundService) {}

  pickTerm(category: Category) {
    this.category = category;
    const index = Math.floor(Math.random() * TermsMap[this.category].length);
    this._term = TermsMap[this.category][index];
    this.resetGame();
    this.soundService.preloadSounds([
      Sound.Correct,
      Sound.Wrong,
      Sound.Confetti,
    ]);
    return this._term;
  }

  private resetGame() {
    this.wrongGuesses = 0;
    this._health = 100;
    this._correctLetters = [];
    this._wrongLetters = [];
    this.gameResultSubject.next(null);
  }

  playAgain() {
    this.resetGame();
    this.pickTerm(this.category);
  }

  chooseLetter(letter: string) {
    if (letter.length != 1 || this.gameResultSubject.value) return;

    if (this._term.name.toLowerCase().includes(letter.toLowerCase())) {
      if (!this.isCorrectLetter(letter)) this.handleCorrectLetter(letter);
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
    if (!this.checkGameLost()) this.soundService.playSound(Sound.Wrong, 40);
  }

  handleCorrectLetter(letter: string) {
    this._correctLetters.push(letter);
    this.soundService.playSound(Sound.Correct);
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
    if (this.checkGameWon()) this.handleWin();
    else if (this.wrongGuesses == this.allowedGuesses) this.handleLost();
    else this.gameResultSubject.next(null);
  }

  handleWin() {
    this.gameResultSubject.next({ gameWon: true, winner: null });
    this.soundService.playSound(Sound.Confetti);
    this.celebrate();
  }

  handleLost() {
    this.gameResultSubject.next({ gameWon: false, winner: null });
    this.triggerShakeEffect();
  }

  checkGameWon() {
    return this.term.name
      .toLocaleLowerCase()
      .split(' ')
      .join('')
      .split('')
      .every((letter) =>
        this.correctLetters.map((l) => l.toLocaleLowerCase()).includes(letter)
      );
  }
  checkGameLost() {
    return this.wrongGuesses >= this.allowedGuesses;
  }

  celebrate() {
    const duration = 3000; // in milliseconds
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });

    setTimeout(() => confetti.reset(), duration);
  }

  triggerShakeEffect() {
    const body = document.querySelector('body')!;
    body.classList.add('shake');
    setTimeout(() => {
      body.classList.remove('shake');
    }, 1000);
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
  get gameResult$() {
    return this._gameResult;
  }
}
