import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'playable-letter',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './playable-letter.component.html',
  styleUrl: './playable-letter.component.scss',
})
export class PlayableLetterComponent {
  @Input('letter') letter: string = '';
  @Input('disabled') disabled: boolean = true;
}
