import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  FilterExpressionUtils,
  Expression,
  OTableComponent,
} from "ontimize-web-ngx";
import { OTranslateService } from "ontimize-web-ngx";
import { Subscription } from "rxjs";
import { Enum, PROGRESS_LIMIT_TIME, enumResults } from "src/app/shared/enum";
import * as XLSX from "xlsx";

@Component({
  selector: "app-results-home",
  templateUrl: "./results-home.component.html",
  styleUrls: ["./results-home.component.scss"],
  providers: [Enum],
})
export class ResultsHomeComponent implements OnInit {
  private translateServiceSubscription: Subscription;
  public array: Object[];

  constructor(private translate: OTranslateService, private combo: Enum) {
    console.log(this.translate.get("Completado"));
    this.array = [
      {
        key: enumResults.Todos,
        value: "All",
      },
      {
        key: enumResults.Completado,
        value: "Completado",
      },
      {
        key: enumResults.En_curso,
        value: "En curso",
      },
      {
        key: enumResults.Error,
        value: "Scan_error",
      },
    ];
  }

  public ngOnDestroy(): void {
    if (this.translateServiceSubscription) {
      this.translateServiceSubscription.unsubscribe();
    }
  }

  public getDataArray(): any[] {
    return this.array;
  }

  public getValueSimple(): any {
    return 0;
  }

  ngOnInit() {}
  createFilter(values: Array<{ attr; value }>): Expression {
    // Prepare simple expressions from the filter components values
    let filters: Array<Expression> = [];
    let fecha = new Date();
    fecha.setHours(fecha.getHours() - PROGRESS_LIMIT_TIME);
    values.forEach((fil) => {
      if (fil.attr === "resultState") {
        let limit_date = new Date();
        limit_date.setHours(limit_date.getHours() - PROGRESS_LIMIT_TIME);
        if (fil.value === enumResults.Completado) {
          filters.push(
            FilterExpressionUtils.buildExpressionIsNotNull("scan_date_out")
          );
        } else if (fil.value === enumResults.En_curso) {
          filters.push(
            FilterExpressionUtils.buildExpressionIsNull("scan_date_out")
          );
          filters.push(
            FilterExpressionUtils.buildExpressionMore(
              "scan_date_in",
              limit_date
            )
          );
        } else if (fil.value === enumResults.Error) {
          filters.push(
            FilterExpressionUtils.buildExpressionIsNull("scan_date_out")
          );
          filters.push(
            FilterExpressionUtils.buildExpressionLessEqual(
              "scan_date_in",
              limit_date
            )
          );
        }
      }
    });

    // Build complex expression
    if (filters.length == 1) {
      return filters[0];
    } else if (filters.length > 1) {
      return filters.reduce((exp1, exp2) =>
        FilterExpressionUtils.buildComplexExpression(
          exp1,
          exp2,
          FilterExpressionUtils.OP_AND
        )
      );
    } else {
      return null;
    }
  }

  // Export data

  /*name of the excel-file which will be downloaded. */

  @ViewChild("scanTable", { static: false }) scanTable: OTableComponent;

  exportExcel() {
    let data = this.scanTable.getAllRenderedValues();
    data.forEach((fil) => {
      let translate_to =
        fil["scan_date_out"] === undefined ? "En curso" : "Completado";
      fil["resultState"] = this.translate.get(translate_to);
    });
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    ws["!cols"] = [];
    Object.keys(data[0]).forEach((cell: any) => {
      const colWidth = 140;
      ws["!cols"].push({
        wpx: colWidth,
      });
    });
    ws["A1"]["v"] = this.translate.get("resultState");
    ws["B1"]["v"] = this.translate.get("plate");
    ws["C1"]["v"] = this.translate.get("trailer_plate");
    ws["D1"]["v"] = this.translate.get("delivery_note");
    ws["E1"]["v"] = this.translate.get("scan_date_in");
    ws["F1"]["v"] = this.translate.get("scan_date_out");

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Results");

    /* save to file */
    XLSX.writeFile(wb, "Results.xlsx", { cellStyles: true });
  }
}
