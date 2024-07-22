import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'keyboard-letter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './keyboard-letter.component.html',
  styleUrl: './keyboard-letter.component.scss',
})
export class KeyboardLetterComponent {
  @Input('letter') letter: string = ' ';
  @Input('disabled')
  disabled: boolean = false;
}
