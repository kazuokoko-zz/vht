import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LuckyDrawContainerComponent } from './main/lucky-draw/container/lucky-draw-container/lucky-draw-container.component';

const routes: Routes = [
  { path: 'lixidaunam', component: LuckyDrawContainerComponent },
  { path: '', redirectTo: 'lixidaunam', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
