import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuckyDrawContainerComponent } from './container/lucky-draw-container/lucky-draw-container.component';
import { LuckyDrawHomeComponent } from './components/lucky-draw-home/lucky-draw-home.component';
import { LuckyDrawPrizeComponent } from './components/lucky-draw-prize/lucky-draw-prize.component';
import { LuckyDrawSpinComponent } from './components/lucky-draw-spin/lucky-draw-spin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LuckyDrawContainerComponent,
    LuckyDrawHomeComponent,
    LuckyDrawSpinComponent,
    LuckyDrawPrizeComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class LuckyDrawModule {}
