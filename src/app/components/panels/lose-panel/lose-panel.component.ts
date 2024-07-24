import { Component } from '@angular/core';
import { TextButtonComponent } from '../../text-button/text-button.component';
import { PanelComponent } from '../../panel/panel.component';
import { Panels } from '../../../constants/Panels';
import { PanelService } from '../../../services/panel.service';

@Component({
  selector: 'lose-panel',
  standalone: true,
  imports: [TextButtonComponent, PanelComponent],
  templateUrl: './lose-panel.component.html',
  styleUrl: './lose-panel.component.scss',
})
export class LosePanelComponent {
  constructor(public panelService: PanelService) {}

  panels = Panels;
}
