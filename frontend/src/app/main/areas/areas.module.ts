import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OntimizeWebModule } from "ontimize-web-ngx";
import { AreasRoutingModule } from "./areas-routing.module";
import { AreasHomeComponent } from "./areas-home/areas-home.component";
import { AreasDetailComponent } from "./areas-detail/areas-detail.component";
import { AreasNewComponent } from './areas-new/areas-new.component';

@NgModule({
  declarations: [AreasHomeComponent, AreasDetailComponent, AreasNewComponent],
  imports: [CommonModule, OntimizeWebModule, AreasRoutingModule],
})
export class AreasModule {}
