import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  OChartComponent,
  DataAdapterUtils,
  LineChartConfiguration,
  LinePlusBarFocusChartConfiguration,
  ChartService,
} from "ontimize-web-ngx-charts";
import { FilterExpressionUtils, Expression, OTableButtonsComponent, OTableComponent, OTableInitializationOptions } from "ontimize-web-ngx";
import { Subscription } from "rxjs";
import { OTranslateService } from "ontimize-web-ngx";
import { TranslateService } from "@ngx-translate/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-graphs-home",
  templateUrl: "./graphs-home.component.html",
  styleUrls: ["./graphs-home.component.css"],
})
@Component({
  selector: "line",
  template: `
    <p>{{ translatedWord }}</p>
  `
  //templateUrl: './line.component.html'
})
export class GraphsHomeComponent implements OnInit {
  @ViewChild("graph", { static: false }) graph: OChartComponent;
  
  chartParameters: LineChartConfiguration;

  chartData: Array<Object>;
  translatedWord: string;

  private translateServiceSubscription: Subscription;


  constructor(private router: Router, private actRoute: ActivatedRoute, private http: HttpClient, private translate: OTranslateService) {
    this.chartParameters = new LineChartConfiguration();
    this.chartParameters.isArea = [false];
    this.chartParameters.interactive = true;
    this.chartParameters.useInteractiveGuideline = false;
    // this.chartParameters.legend.vers = 'furious';
    // this.fetchTranslation();
    this.chartParameters.showLegend = true;

    translate.onLanguageChanged.subscribe(() => {
      // let result = Object.keys(this.chartData).map((key) => [key, this.chartData[key]]);
      this.chartData[0]['key'] = this.translate.get('graph');
      this.graph.setDataArray(this.chartData);
      this.graph.reloadData();
    });
  }

  // fetchTranslation() {
  //   this.http.get<any>('assets/i18n/es.json').subscribe(data => {
  //     const translatedWord = data['graph'];
  //   });
  // }

  ngOnInit() {
    // nothing to do
  }

  public ngOnDestroy(): void {
    if (this.http) {
      this.http.delete;
    }
  }

  createFilter(values: Array<{ attr; value }>): Expression {
    let filters: Array<Expression> = [];
    values.forEach((fil) => {
      if (fil.value) {
        if (fil.attr === "STARTDATE_I") {
          filters.push(
            FilterExpressionUtils.buildExpressionMoreEqual("date", fil.value)
          );
        }
        if (fil.attr === "STARTDATE_E") {
          filters.push(
            FilterExpressionUtils.buildExpressionLessEqual("date", fil.value)
          );
        }
      }
    });

    if (filters.length > 0) {
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

  navigate() {
    this.router.navigate(["../", "login"], { relativeTo: this.actRoute });
  }

  ngAfterViewInit() {
  }

  dataLoaded(event: any) {
    this.chartData = this.adaptResult(event);
    this.graph.setDataArray(this.chartData);
  }

  adaptResult(data: any) {
    let values = this.processValues(data);
    return [
      {
        key: this.translate.get('graph'),
        values: values,
        color: '#e74c3c'
      },
    ];
  }
  processValues(data: any) {
    let values = [];
    data.forEach(function (d) {
      let date = d.date;
      let conteo = d.conteo;

      let entrada = {
        x: date,
        y: conteo,
      };

      values.push(entrada);
    });

    return values;
  }
}
