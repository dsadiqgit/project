import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAuComponent } from './club-au.component';

describe('ClubAuComponent', () => {
  let component: ClubAuComponent;
  let fixture: ComponentFixture<ClubAuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubAuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubAuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
