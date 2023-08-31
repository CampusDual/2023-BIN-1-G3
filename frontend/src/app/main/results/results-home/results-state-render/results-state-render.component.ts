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
    let limit_date = new Date();
    limit_date.setHours(limit_date.getHours() - 3);
    if (
      rowvalue["scan_date_out"] == null &&
      rowvalue["scan_date_in"] >= limit_date
    ) {
      return "⌛";
    } else if (
      rowvalue["scan_date_out"] == null &&
      rowvalue["scan_date_in"] <= limit_date
    ) {
      return "❌";
    } else {
      return "✅";
    }
  }
}
