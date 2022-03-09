import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioStripComponent } from './portfolio-strip.component';

describe('PortfolioStripComponent', () => {
  let component: PortfolioStripComponent;
  let fixture: ComponentFixture<PortfolioStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioStripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
