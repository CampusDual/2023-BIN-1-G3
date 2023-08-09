import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  OChartComponent,
  DataAdapterUtils,
  LineChartConfiguration,
  LinePlusBarFocusChartConfiguration,
  ChartService,
} from "ontimize-web-ngx-charts";
import { FilterExpressionUtils, Expression } from "ontimize-web-ngx";
import { Subscription } from "rxjs";
import { OTranslateService } from "ontimize-web-ngx";

@Component({
  selector: "app-graphs-home",
  templateUrl: "./graphs-home.component.html",
  styleUrls: ["./graphs-home.component.css"],
})
@Component({
  selector: "line",
  //templateUrl: './line.component.html'
})
export class GraphsHomeComponent implements OnInit {
  @ViewChild("graph", { static: false }) graph: OChartComponent;

  chartParameters: LineChartConfiguration;

  chartData: Array<Object>;

  constructor(private router: Router, private actRoute: ActivatedRoute) {
    this.chartParameters = new LineChartConfiguration();
    this.chartParameters.isArea = [false];
    this.chartParameters.interactive = true;
    this.chartParameters.useInteractiveGuideline = false;
  }

  ngOnInit() {
    // nothing to do
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
    console.log(this.graph);
  }

  dataLoaded(event: any) {
    console.log(event);
    this.adaptResult(event);
    //console.log(this.chartData.length);
    if (event.length === 0) {
      this.graph.setDataArray(this.adaptResult([{ date: 1677625200000, conteo: 58 }]));
      // console.log("Vaciar gráfica");
    } else {
      this.graph.setDataArray(this.chartData);
    }

    // DataAdapterUtils.createDataAdapter(this.chartParameters);
    // this.candlestick.setDataArray(DataAdapterUtils.adapter.adaptResult(charData));
    //this.chartData = DataAdapterUtils.adapter.adaptResult(data);
    // console.log(this.chartData.length);
  }

  adaptResult(data: any) {
    if (data && data.length) {
      let values = this.processValues(data);
      // chart data
      this.chartData = [
        {
          key: "Graph",
          values: values,
        },
      ];
    }
    console.log("Datos " + this.chartData.length);
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
      // console.log("Entradas "+ entrada);
      // console.log("Date "+ date);

      values.push(entrada);
    });

    // console.log("Values"+ values);
    return values;
  }
}
