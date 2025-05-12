import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentInputSectionComponent } from './investment-input-section.component';

describe('InvestmentInputSectionComponent', () => {
  let component: InvestmentInputSectionComponent;
  let fixture: ComponentFixture<InvestmentInputSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentInputSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentInputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
