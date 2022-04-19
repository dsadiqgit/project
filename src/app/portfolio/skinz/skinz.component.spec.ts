import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinzComponent } from './skinz.component';

describe('SkinzComponent', () => {
  let component: SkinzComponent;
  let fixture: ComponentFixture<SkinzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
