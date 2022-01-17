import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyDrawHomeComponent } from './lucky-draw-home.component';

describe('LuckyDrawHomeComponent', () => {
  let component: LuckyDrawHomeComponent;
  let fixture: ComponentFixture<LuckyDrawHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyDrawHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyDrawHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
