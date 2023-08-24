import { Component, OnInit } from '@angular/core';
import { OTranslateService } from "ontimize-web-ngx";
import { Subscription } from "rxjs";
import { FilterExpressionUtils, Expression } from "ontimize-web-ngx";


@Component({
  selector: 'app-trucks-home',
  templateUrl: './trucks-home.component.html',
  styleUrls: ['./trucks-home.component.css']
})

export class TrucksHomeComponent implements OnInit {
  private translateServiceSubscription: Subscription;
  public array: Object[];

  constructor(translate: OTranslateService) {
    this.array = [
      {
        key: 1,
        value: "Articulado",
      },
      {
        key: 2,
        value: "No Articulado",
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
      if (fil.value === 1) {
        if (fil.attr === "checkTruck") {
          filters.push(
            FilterExpressionUtils.buildExpressionEquals("ttype", 0)
          );
        }
      }
      if (fil.value === 2) {
        if (fil.attr === "checkTruck") {
          filters.push(
            FilterExpressionUtils.buildExpressionEquals("ttype", 1)
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
