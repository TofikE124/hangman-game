import { Component, Input } from '@angular/core';
import { TextGradientComponent } from '../typography/text-gradient/text-gradient.component';
import { PanelService } from '../../services/panel.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'panel',
  standalone: true,
  imports: [TextGradientComponent, NgClass],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  constructor(public panelService: PanelService) {}

  @Input('title') title: string = '';
  @Input('name') name!: string;
  @Input('closedByOverlay') closeByOverlay: boolean = true;

  handleOverlayClick() {
    if (this.closeByOverlay) this.panelService.closePanel(this.name);
  }
}
