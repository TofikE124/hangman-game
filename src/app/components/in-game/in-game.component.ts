import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Term, uppercaseLetters } from '../../../constants/data';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { PlayableLetterComponent } from '../playable-letter/playable-letter.component';
import { NgFor } from '@angular/common';
import { KeyboardLetterComponent } from '../keyboard-letter/keyboard-letter.component';
import { TermService } from '../../services/term.service';
import { HealthBarComponent } from './health-bar/health-bar.component';
import { PlayableLettersComponent } from './playable-letters/playable-letters.component';
import { KeyboardLettersComponent } from './keyboard-letters/keyboard-letters.component';

@Component({
  selector: 'app-in-game',
  standalone: true,
  imports: [
    IconButtonComponent,
    PlayableLetterComponent,
    NgFor,
    KeyboardLetterComponent,
    HealthBarComponent,
    PlayableLettersComponent,
    KeyboardLettersComponent,
  ],
  templateUrl: './in-game.component.html',
  styleUrl: './in-game.component.scss',
})
export class InGameComponent implements OnInit {
  category!: Category;
  term!: Term;

  constructor(private route: ActivatedRoute, public termService: TermService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category') as Category;
      this.term = this.termService.pickTerm(this.category);
    });
  }
}
