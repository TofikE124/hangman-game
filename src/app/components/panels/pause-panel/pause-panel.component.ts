import { Component } from '@angular/core';
import { PanelComponent } from '../../panel/panel.component';
import { TextButtonComponent } from '../../text-button/text-button.component';
import { Panels } from '../../../constants/Panels';
import { PanelService } from '../../../services/panel.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pause-panel',
  standalone: true,
  imports: [PanelComponent, TextButtonComponent, RouterModule],
  templateUrl: './pause-panel.component.html',
  styleUrl: './pause-panel.component.scss',
})
export class PausePanelComponent {
  constructor(public panelService: PanelService) {}

  panels = Panels;
}
