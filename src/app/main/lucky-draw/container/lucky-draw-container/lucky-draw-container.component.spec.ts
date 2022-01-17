import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyDrawContainerComponent } from './lucky-draw-container.component';

describe('LuckyDrawContainerComponent', () => {
  let component: LuckyDrawContainerComponent;
  let fixture: ComponentFixture<LuckyDrawContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyDrawContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyDrawContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
