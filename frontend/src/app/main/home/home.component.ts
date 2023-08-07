import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { OChartComponent, DataAdapterUtils, LineChartConfiguration, LinePlusBarFocusChartConfiguration, ChartService } from 'ontimize-web-ngx-charts';
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

  chartData: Array<Object> = [{"date":1677625200000,"conteo":58},{"date":1677711600000,"conteo":82},{"date":1677798000000,"conteo":80},{"date":1677884400000,"conteo":4},{"date":1677970800000,"conteo":0},{"date":1678057200000,"conteo":65},{"date":1678143600000,"conteo":82},{"date":1678230000000,"conteo":70},{"date":1678316400000,"conteo":83},{"date":1678402800000,"conteo":76},{"date":1678489200000,"conteo":11},{"date":1678575600000,"conteo":0},{"date":1678662000000,"conteo":70},{"date":1678748400000,"conteo":78},{"date":1678834800000,"conteo":78},{"date":1678921200000,"conteo":68},{"date":1679007600000,"conteo":71},{"date":1679094000000,"conteo":5},{"date":1679180400000,"conteo":0},{"date":1679266800000,"conteo":86},{"date":1679353200000,"conteo":74},{"date":1679439600000,"conteo":84},{"date":1679526000000,"conteo":75},{"date":1679612400000,"conteo":82},{"date":1679698800000,"conteo":8},{"date":1679785200000,"conteo":0},{"date":1679868000000,"conteo":71},{"date":1679954400000,"conteo":86},{"date":1680040800000,"conteo":96},{"date":1680127200000,"conteo":84},{"date":1680213600000,"conteo":94}]
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
             filters.push(FilterExpressionUtils.buildExpressionMoreEqual('date', fil.value));
          }
          if (fil.attr === 'STARTDATE_E') {
             filters.push(FilterExpressionUtils.buildExpressionLessEqual('date', fil.value));
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

  dataLoaded(event: any){
    console.log(event);
    //this.chartData = event;
    //this.chartData = DataAdapterUtils.adapter.adaptResult(event);
    console.log(this.chartData.length);
  }

}
