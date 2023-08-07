import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { OChartComponent, LineChartConfiguration, LinePlusBarFocusChartConfiguration, ChartService } from 'ontimize-web-ngx-charts';
import { FilterExpressionUtils, Expression } from 'ontimize-web-ngx';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Component({
  selector: 'line',
  //templateUrl: './line.component.html'
})
export class HomeComponent implements OnInit {

  chartParameters: LineChartConfiguration;
  //chartParameters: LinePlusBarFocusChartConfiguration;


  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.chartParameters = new LineChartConfiguration();
    this.chartParameters.isArea = [false];
    this.chartParameters.interactive = true;
    this.chartParameters.useInteractiveGuideline = false;
    // this.chartParameters = new LinePlusBarFocusChartConfiguration();
    // this.chartParameters.bars = [ true, false];
    // this.chartParameters.to_zero = [true, false];
    // this.chartParameters.to_previusValue = [false, false];
  }

  ngOnInit() {
    // nothing to do
  }

  createFilter(values: Array<{ attr, value }>): Expression {
    let filters: Array<Expression> = [];
    values.forEach(fil => {
       if (fil.value) {
          if (fil.attr === 'STARTDATE_I') {
             filters.push(FilterExpressionUtils.buildExpressionMoreEqual('Date', fil.value));
          }
          if (fil.attr === 'STARTDATE_E') {
             filters.push(FilterExpressionUtils.buildExpressionLessEqual('Date', fil.value));
          }
       }
    });

    if (filters.length > 0) {
       return filters.reduce((exp1, exp2) => FilterExpressionUtils.buildComplexExpression(exp1, exp2, FilterExpressionUtils.OP_AND));
    } else {
       return null;
    }
 }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

}
