import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Term, uppercaseLetters } from '../../constants/data';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { PlayableLetterComponent } from '../playable-letter/playable-letter.component';
import { NgFor } from '@angular/common';
import { KeyboardLetterComponent } from '../keyboard-letter/keyboard-letter.component';
import { TermService } from '../../services/term.service';
import { HealthBarComponent } from './health-bar/health-bar.component';
import { PlayableLettersComponent } from './playable-letters/playable-letters.component';
import { KeyboardLettersComponent } from './keyboard-letters/keyboard-letters.component';
import { PanelService } from '../../services/panel.service';
import { Panels } from '../../constants/Panels';
import { PausePanelComponent } from '../panels/pause-panel/pause-panel.component';
import { BgOverlayComponent } from '../bg-overlay/bg-overlay.component';
import { WinPanelComponent } from '../panels/win-panel/win-panel.component';
import { LosePanelComponent } from '../panels/lose-panel/lose-panel.component';
import { Title } from '@angular/platform-browser';
import { title } from 'process';

@Component({
  selector: 'app-in-game',
  standalone: true,
  imports: [
    IconButtonComponent,
    PlayableLetterComponent,
    NgFor,
    KeyboardLetterComponent,
    HealthBarComponent,
    PlayableLettersComponent,
    KeyboardLettersComponent,
    PausePanelComponent,
    BgOverlayComponent,
    WinPanelComponent,
    LosePanelComponent,
  ],
  templateUrl: './in-game.component.html',
  styleUrl: './in-game.component.scss',
})
export class InGameComponent implements OnInit {
  category!: Category;

  panels = Panels;

  constructor(
    private route: ActivatedRoute,
    public termService: TermService,
    public panelService: PanelService,
    private titleService: Title
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category') as Category;
      this.termService.pickTerm(this.category);
      this.titleService.setTitle(`Hangman | ${this.category}`);
    });

    this.termService.gameResult$.subscribe((result) => {
      if (!result) {
      } else {
        if (result?.gameWon) this.panelService.openPanel(Panels.WIN);
        else this.panelService.openPanel(Panels.LOSE);
      }
    });
  }
}
