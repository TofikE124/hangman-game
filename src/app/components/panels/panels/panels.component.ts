import { Component } from '@angular/core';
import { PausePanelComponent } from '../pause-panel/pause-panel.component';

@Component({
  selector: 'panels',
  standalone: true,
  imports: [PausePanelComponent],
  templateUrl: './panels.component.html',
  styleUrl: './panels.component.scss',
})
export class PanelsComponent {}
