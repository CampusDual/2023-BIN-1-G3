import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OntimizeWebModule } from "ontimize-web-ngx";
import { CapitalizePipe } from "./capitalize.pipe";
import { ResultsStateRenderComponent } from "../main/results/results-home/results-state-render/results-state-render.component";
import { CheckRenderComponent } from "./check-render/check-render.component";
// import { ComboService } from "./combo.service";

@NgModule({
  imports: [OntimizeWebModule],
  declarations: [
    CapitalizePipe,
    ResultsStateRenderComponent,
    CheckRenderComponent,
    // ComboService,
  ],
  exports: [
    CommonModule,
    CapitalizePipe,
    ResultsStateRenderComponent,
    CheckRenderComponent,
    // ComboService,
  ],
})
export class SharedModule {}
