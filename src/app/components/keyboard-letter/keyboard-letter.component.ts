import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyboardService } from '../../services/keyboard.service';

@Component({
  selector: 'keyboard-letter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './keyboard-letter.component.html',
  styleUrl: './keyboard-letter.component.scss',
})
export class KeyboardLetterComponent implements OnInit {
  @Input('letter') letter: string = ' ';
  @Input('disabled')
  disabled: boolean = false;

  @Output('onClick') onClick = new EventEmitter<string>();

  constructor(private keyboardService: KeyboardService) {}

  ngOnInit(): void {
    this.keyboardService.register(this.letter.toLowerCase(), () => {
      this.handleClick();
    });
  }

  handleClick() {
    this.onClick.emit(this.letter);
  }
}
