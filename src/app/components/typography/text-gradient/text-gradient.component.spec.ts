import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGradientComponent } from './text-gradient.component';

describe('TextGradientComponent', () => {
  let component: TextGradientComponent;
  let fixture: ComponentFixture<TextGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextGradientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
