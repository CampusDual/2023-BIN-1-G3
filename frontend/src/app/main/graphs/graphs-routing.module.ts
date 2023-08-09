import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphsHomeComponent } from './graphs-home/graphs-home.component';

const routes: Routes = [{
  path:'',
  component: GraphsHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule { }
