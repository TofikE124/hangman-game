import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Term } from '../../../constants/data';
import { PlayableLetterComponent } from '../../playable-letter/playable-letter.component';
import { TermService } from '../../../services/term.service';

@Component({
  selector: 'playable-letters',
  standalone: true,
  imports: [NgFor, PlayableLetterComponent],
  templateUrl: './playable-letters.component.html',
  styleUrl: './playable-letters.component.scss',
})
export class PlayableLettersComponent {
  constructor(public termService: TermService) {}

  @Input('term') term!: Term;

  getWordsFromTerm() {
    return this.term.name.split(' ');
  }
}
