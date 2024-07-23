import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayableLettersComponent } from './playable-letters.component';

describe('PlayableLettersComponent', () => {
  let component: PlayableLettersComponent;
  let fixture: ComponentFixture<PlayableLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayableLettersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayableLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
