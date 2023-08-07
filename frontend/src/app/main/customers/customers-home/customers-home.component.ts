import { Component, OnInit } from '@angular/core';
// import { ChartSeries, PieChartConfiguration } from 'ontimize-web-ngx-charts';
// import { OChartComponent, DonutChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.scss']
})
export class CustomersHomeComponent implements OnInit {

  ngOnInit() {
  }

  //constructor() {}

  /*public movementTypesChartParams: PieChartConfiguration;
  public chartParameters: DonutChartConfiguration;

  private _configureDonutChart(locale: any): void {
    this.movementTypesChartParams = new PieChartConfiguration();
    this.movementTypesChartParams.margin.top = 0;
    this.movementTypesChartParams.margin.right = 0;
    this.movementTypesChartParams.margin.bottom = 0;
    this.movementTypesChartParams.margin.left = 0;
    this.movementTypesChartParams.legendPosition = 'bottom';
    this.movementTypesChartParams.legend.vers = 'furious';
    this.movementTypesChartParams.labelType = 'value';
    //this.movementTypesChartParams.valueType = locale.numberFormat('$,.2f');
    this.chartParameters = new DonutChartConfiguration();
    this.chartParameters.showLabels = true;
    this.chartParameters.cornerRadius = 1;
    this.chartParameters.donutRatio = 0.5;
  }*/

}
