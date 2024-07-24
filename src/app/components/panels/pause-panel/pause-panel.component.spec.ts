import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PausePanelComponent } from './pause-panel.component';

describe('PausePanelComponent', () => {
  let component: PausePanelComponent;
  let fixture: ComponentFixture<PausePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PausePanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PausePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
