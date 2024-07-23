import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../constants/data';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { PlayableLetterComponent } from '../playable-letter/playable-letter.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-in-game',
  standalone: true,
  imports: [IconButtonComponent, PlayableLetterComponent, NgFor],
  templateUrl: './in-game.component.html',
  styleUrl: './in-game.component.scss',
})
export class InGameComponent implements OnInit {
  category!: Category;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category') as Category;
    });
  }

  term = 'The lion king';

  getWordsFromTerm() {
    return this.term.split(' ');
  }
}
