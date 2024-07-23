import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardLettersComponent } from './keyboard-letters.component';

describe('KeyboardLettersComponent', () => {
  let component: KeyboardLettersComponent;
  let fixture: ComponentFixture<KeyboardLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardLettersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyboardLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
