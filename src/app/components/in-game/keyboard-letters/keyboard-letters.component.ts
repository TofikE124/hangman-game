import { Component, Input } from '@angular/core';
import { KeyboardLetterComponent } from '../../keyboard-letter/keyboard-letter.component';
import { NgFor } from '@angular/common';
import { Term, uppercaseLetters } from '../../../constants/data';
import { TermService } from '../../../services/term.service';

@Component({
  selector: 'keyboard-letters',
  standalone: true,
  imports: [KeyboardLetterComponent, NgFor],
  templateUrl: './keyboard-letters.component.html',
  styleUrl: './keyboard-letters.component.scss',
})
export class KeyboardLettersComponent {
  @Input('term') term!: Term;

  letters = uppercaseLetters;

  constructor(public termService: TermService) {}
}
