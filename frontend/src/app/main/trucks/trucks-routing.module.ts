import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrucksHomeComponent } from "./trucks-home/trucks-home.component";
import { TrucksDetailComponent } from "./trucks-detail/trucks-detail.component";

const routes: Routes = [
  {
    path: "",
    component: TrucksHomeComponent,
  },
  {
    path: ":id_truck",
    component: TrucksDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrucksRoutingModule {}
