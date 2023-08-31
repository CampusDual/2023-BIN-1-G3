import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GraphVolumesHomeComponent } from "./graph-volumes-home/graph-volumes-home.component";

const routes: Routes = [
  {
    path: "",
    component: GraphVolumesHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphVolumesRoutingModule {}
