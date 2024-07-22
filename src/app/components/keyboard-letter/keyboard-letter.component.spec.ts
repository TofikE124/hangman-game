import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardLetterComponent } from './keyboard-letter.component';

describe('KeyboardLetterComponent', () => {
  let component: KeyboardLetterComponent;
  let fixture: ComponentFixture<KeyboardLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardLetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyboardLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
