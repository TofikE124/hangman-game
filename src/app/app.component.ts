import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyboardLetterComponent } from './components/keyboard-letter/keyboard-letter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KeyboardLetterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
