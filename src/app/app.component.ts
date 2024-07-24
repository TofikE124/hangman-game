import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyboardLetterComponent } from './components/keyboard-letter/keyboard-letter.component';
import { PanelComponent } from './components/panel/panel.component';
import { PanelsComponent } from './components/panels/panels/panels.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    KeyboardLetterComponent,
    PanelComponent,
    PanelsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
