import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { ResultsDetailComponent } from './results-detail/results-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersHomeComponent
  },
  {
    path: ":id_scan_result",
    component: ResultsDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
