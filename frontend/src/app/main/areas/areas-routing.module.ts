import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AreasHomeComponent } from "./areas-home/areas-home.component";
import { AreasDetailComponent } from "./areas-detail/areas-detail.component";
import { AreasNewComponent } from "./areas-new/areas-new.component";

const routes: Routes = [
  {
    path: "",
    component: AreasHomeComponent,
  },
  {
    path: "new",
    component: AreasNewComponent,
  },
  {
    path: ":id_area",
    component: AreasDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreasRoutingModule {}
