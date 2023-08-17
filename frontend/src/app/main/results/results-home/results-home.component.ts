import { Component, OnInit } from '@angular/core';
import { FilterExpressionUtils, Expression } from 'ontimize-web-ngx';

@Component({
  selector: 'app-results-home',
  templateUrl: './results-home.component.html',
  styleUrls: ['./results-home.component.scss']
})
export class ResultsHomeComponent implements OnInit {

  public array: Object[] = [{
    key: 1,
    value: 'Completed'
  }, {
    key: 2,
    value: 'In progress'
  }];

  public getDataArray(): any[] {
    return this.array;
  }

  public getValueSimple(): any {
    return 0;
  }

  ngOnInit() {
  }
  createFilter(values: Array<{ attr, value }>): Expression {
    // Prepare simple expressions from the filter components values
    let filters: Array<Expression> = [];
    values.forEach(fil => {
      if (fil.value === 2) {
        if (fil.attr === 'resultState') {
          filters.push(FilterExpressionUtils.buildExpressionIsNull('scan_date_out'));
        }
      }
      if (fil.value === 1){
        if (fil.attr === 'resultState') {
          filters.push(FilterExpressionUtils.buildExpressionIsNotNull('scan_date_out'));
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
