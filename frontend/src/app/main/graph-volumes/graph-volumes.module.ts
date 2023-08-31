import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GraphVolumesRoutingModule } from "./graph-volumes-routing.module";
import { GraphVolumesHomeComponent } from "./graph-volumes-home/graph-volumes-home.component";
import { OntimizeWebModule } from "ontimize-web-ngx";
import { OChartModule } from "ontimize-web-ngx-charts";

@NgModule({
  declarations: [GraphVolumesHomeComponent],
  imports: [
    CommonModule,
    GraphVolumesRoutingModule,
    OntimizeWebModule,
    OChartModule,
  ],
})
export class GraphVolumesModule {}
