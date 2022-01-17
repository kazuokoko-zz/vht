import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyDrawSpinComponent } from './lucky-draw-spin.component';

describe('LuckyDrawSpinComponent', () => {
  let component: LuckyDrawSpinComponent;
  let fixture: ComponentFixture<LuckyDrawSpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyDrawSpinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyDrawSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
