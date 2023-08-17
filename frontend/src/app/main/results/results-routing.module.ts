import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultsHomeComponent } from './results-home/results-home.component';
import { ResultsDetailComponent } from './results-detail/results-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsHomeComponent
  },
  {
    path: ":id_scan_result",
    component: ResultsDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
