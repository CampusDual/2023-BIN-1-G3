import {
  ViewChild,
  TemplateRef,
  Injector,
  Component,
  OnInit,
} from "@angular/core";
import { OBaseTableCellRenderer } from "ontimize-web-ngx";

@Component({
  selector: "app-results-state-render",
  templateUrl: "./results-state-render.component.html",
  styleUrls: ["./results-state-render.component.css"],
})
export class ResultsStateRenderComponent extends OBaseTableCellRenderer {
  @ViewChild("templateref", { read: TemplateRef, static: false })
  public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
  }

  getStateData(cellvalue: any, rowvalue?: any): string {

    if(rowvalue["scan_date_out"] == null){
      return "En curso";
    } else {
      return "Completado"
    }
  }
}
