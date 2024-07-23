import { Component } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { TextButtonComponent } from '../text-button/text-button.component';
import { TextGradientComponent } from '../typography/text-gradient/text-gradient.component';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { Category } from '../../../constants/data';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    IconButtonComponent,
    TextButtonComponent,
    TextGradientComponent,
    RouterModule,
    NgFor,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  categories: Category[] = Object.values(Category);
}
