import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-gradient',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './text-gradient.component.html',
  styleUrl: './text-gradient.component.scss',
})
export class TextGradientComponent {
  @Input('text') text!: string;
}
