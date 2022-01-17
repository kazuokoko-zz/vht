import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LuckyDrawContainerComponent } from './main/lucky-draw/container/lucky-draw-container/lucky-draw-container.component';
import { LuckyDrawHomeComponent } from './main/lucky-draw/components/lucky-draw-home/lucky-draw-home.component';
import { LuckyDrawSpinComponent } from './main/lucky-draw/components/lucky-draw-spin/lucky-draw-spin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LuckyDrawModule } from './main/lucky-draw/lucky-draw.module';
import { LuckyDrawPrizeComponent } from './main/lucky-draw/components/lucky-draw-prize/lucky-draw-prize.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    LuckyDrawModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
