import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorRightComponent } from './tutor-right.component';

describe('TutorrightComponent', () => {
  let component: TutorRightComponent;
  let fixture: ComponentFixture<TutorRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorRightComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
