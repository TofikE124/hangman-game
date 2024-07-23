import { Component } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { TextButtonComponent } from '../text-button/text-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IconButtonComponent, TextButtonComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
