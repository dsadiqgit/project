import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamiComponent } from './dami.component';

describe('DamiComponent', () => {
  let component: DamiComponent;
  let fixture: ComponentFixture<DamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
