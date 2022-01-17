import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyDrawPrizeComponent } from './lucky-draw-prize.component';

describe('LuckyDrawPrizeComponent', () => {
  let component: LuckyDrawPrizeComponent;
  let fixture: ComponentFixture<LuckyDrawPrizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyDrawPrizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyDrawPrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
