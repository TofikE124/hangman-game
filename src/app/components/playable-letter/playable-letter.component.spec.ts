import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayableLetterComponent } from './playable-letter.component';

describe('PlayableLetterComponent', () => {
  let component: PlayableLetterComponent;
  let fixture: ComponentFixture<PlayableLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayableLetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayableLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
