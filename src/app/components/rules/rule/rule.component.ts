import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'rule',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './rule.component.html',
  styleUrl: './rule.component.scss',
})
export class RuleComponent {
  @Input('order') order: string = '';
  @Input('title') title: string = '';
  @Input('description') description: string = '';
}
