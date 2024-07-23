import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'health-bar',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './health-bar.component.html',
  styleUrl: './health-bar.component.scss',
})
export class HealthBarComponent {
  @Input('health') health: number = 100;
}
