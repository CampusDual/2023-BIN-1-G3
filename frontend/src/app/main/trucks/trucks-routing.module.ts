import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrucksHomeComponent } from './trucks-home/trucks-home.component';

const routes: Routes =  [{
  path : '',
  component: TrucksHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrucksRoutingModule { }
