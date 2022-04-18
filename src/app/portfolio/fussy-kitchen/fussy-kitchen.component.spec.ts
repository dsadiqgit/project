import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FussyKitchenComponent } from './fussy-kitchen.component';

describe('FussyKitchenComponent', () => {
  let component: FussyKitchenComponent;
  let fixture: ComponentFixture<FussyKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FussyKitchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FussyKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
