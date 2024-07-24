import { Component } from '@angular/core';
import { BgOverlayComponent } from '../bg-overlay/bg-overlay.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { TextGradientComponent } from '../typography/text-gradient/text-gradient.component';
import { RuleComponent } from './rule/rule.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [
    BgOverlayComponent,
    IconButtonComponent,
    TextGradientComponent,
    RuleComponent,
    RouterModule,
  ],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss',
})
export class RulesComponent {}
