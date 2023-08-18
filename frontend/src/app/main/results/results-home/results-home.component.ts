import { Component, OnInit } from "@angular/core";
import { FilterExpressionUtils, Expression } from "ontimize-web-ngx";
import { OTranslateService } from "ontimize-web-ngx";
import { Subscription } from "rxjs";

@Component({
  selector: "app-results-home",
  templateUrl: "./results-home.component.html",
  styleUrls: ["./results-home.component.scss"],
})
export class ResultsHomeComponent implements OnInit {
  private translateServiceSubscription: Subscription;
  public array: Object[];

  constructor(translate: OTranslateService) {
    console.log(translate.get("Completado"));
    this.array = [
      {
        key: 1,
        value: "Completado",
      },
      {
        key: 2,
        value: "En curso",
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
    values.forEach((fil) => {
      if (fil.value === 2) {
        if (fil.attr === "resultState") {
          filters.push(
            FilterExpressionUtils.buildExpressionIsNull("scan_date_out")
          );
        }
      }
      if (fil.value === 1) {
        if (fil.attr === "resultState") {
          filters.push(
            FilterExpressionUtils.buildExpressionIsNotNull("scan_date_out")
          );
        }
      }
    });

    // Build complex expression
    if (filters.length > 0) {
      return filters[0];
    } else {
      return null;
    }
  }
}
