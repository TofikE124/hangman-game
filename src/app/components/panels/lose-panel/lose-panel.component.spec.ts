import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosePanelComponent } from './lose-panel.component';

describe('LosePanelComponent', () => {
  let component: LosePanelComponent;
  let fixture: ComponentFixture<LosePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LosePanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LosePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
