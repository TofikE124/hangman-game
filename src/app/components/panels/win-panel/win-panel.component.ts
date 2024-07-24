import { Component } from '@angular/core';
import { Panels } from '../../../constants/Panels';
import { PanelService } from '../../../services/panel.service';
import { PanelComponent } from '../../panel/panel.component';
import { TextButtonComponent } from '../../text-button/text-button.component';
import { TermService } from '../../../services/term.service';

@Component({
  selector: 'win-panel',
  standalone: true,
  imports: [PanelComponent, TextButtonComponent],
  templateUrl: './win-panel.component.html',
  styleUrl: './win-panel.component.scss',
})
export class WinPanelComponent {
  constructor(
    public panelService: PanelService,
    private termService: TermService
  ) {}

  panels = Panels;

  handlePlayAgain() {
    this.panelService.closePanel(this.panels.WIN);
    this.termService.playAgain();
  }
}
