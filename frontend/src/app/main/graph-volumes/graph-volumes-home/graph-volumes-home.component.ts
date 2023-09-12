import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Injector,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  OChartComponent,
  LineChartConfiguration,
  ChartService,
  MultiBarChartConfiguration,
} from "ontimize-web-ngx-charts";
import { FilterExpressionUtils, Expression } from "ontimize-web-ngx";
import { Subscription } from "rxjs";
import { OTranslateService } from "ontimize-web-ngx";
// import { TranslateService } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { D3LocaleOptions } from "ontimize-web-ngx-charts";
import { D3LocaleService } from "ontimize-web-ngx-charts/lib/services/d3Locale.service";

declare var d3: any;

@Component({
  selector: "app-graph-volumes-home",
  templateUrl: "./graph-volumes-home.component.html",
  styleUrls: ["./graph-volumes-home.component.css"],
})
@Component({
  selector: "line",
  template: ` <p>{{ translatedWord }}</p> `,
  //templateUrl: './line.component.html'
})
export class GraphVolumesHomeComponent implements OnInit {
  @ViewChild("graphvolume", { static: false }) graphvolume: OChartComponent;

  chartParameters: MultiBarChartConfiguration;

  protected data: Array<Object>;

  protected yAxis: string = "total_carga";
  protected xAxis: string = "DATE_";

  chartData: Array<Object>;
  chartData2: Object;
  translatedWord: string;

  private translateServiceSubscription: Subscription;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private http: HttpClient,
    private translate: OTranslateService,
    private injector: Injector
  ) {
    // this.chartParameters = new LineChartConfiguration();
    // this.chartParameters.isArea = [false];
    // this.chartParameters.interactive = true;
    // this.chartParameters.useInteractiveGuideline = false;
    // // this.chartParameters.legend.vers = 'furious';
    // // this.fetchTranslation();
    // this.chartParameters.showLegend = true;
    this.chartParameters = new MultiBarChartConfiguration();
    this.chartParameters.noDataMessage = this.translate.get("noDataMessage");

    this.translateServiceSubscription = translate.onLanguageChanged.subscribe(
      () => {
        // let result = Object.keys(this.chartData).map((key) => [key, this.chartData[key]]);
        this.chartParameters.noDataMessage =
          this.translate.get("noDataMessage");
        if (!this.chartData === undefined) {
          this.chartData[0]["key"] = this.translate.get("graphvolume");
          this.chartData[1]["key"] = this.translate.get("graphvolume2");
          this.chartData[2]["key"] = this.translate.get("graphvolume3");
        }

        this.graphvolume.setDataArray(this.chartData);
        this.graphvolume.reloadData();
      }
    );
  }

  // fetchTranslation() {
  //   this.http.get<any>('assets/i18n/es.json').subscribe(data => {
  //     const translatedWord = data['graph'];
  //   });
  // }

  ngOnInit() {
    // nothing to do
  }

  ngAfterViewInit() {
    if (this.graphvolume) {
      let chartService: ChartService = this.graphvolume.getChartService();
      if (chartService) {
        let chartOps = chartService.getChartOptions();

        // Configuring x axis...
        chartOps["xAxis"]["tickFormat"] = function (d) {
          return d3.time.format("%d/%m/%y")(new Date(d));
        };
        chartOps["yAxis"]["tickFormat"] = function (d) {
          return d3.format(",f")(d) + "m³";
        };

        //Configuring y axis...
        var yScale = d3.scale.linear();
        chartOps["yScale"] = yScale;
        // chartOps["yDomain"] = [-150, 210];
      }
    }

    // Ontimize service query...
    // let service: OntimizeService = this.injector.get(OntimizeService);
    // let conf = service.getDefaultServiceConfiguration();
    // conf["entity"] = "scanLoadVolume";
    // service.configureService(conf);
  }

  public ngOnDestroy(): void {
    this.translateServiceSubscription.unsubscribe();
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
            FilterExpressionUtils.buildExpressionMoreEqual("fecha", fil.value)
          );
        }
        if (fil.attr === "STARTDATE_E") {
          filters.push(
            FilterExpressionUtils.buildExpressionLessEqual("fecha", fil.value)
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

  // ngAfterViewInit() {}

  dataLoaded(event: any) {
    this.chartData = this.adaptResult(event);
    this.graphvolume.setDataArray(this.chartData);
  }

  adaptResult(data: any) {
    if (data && data.length) {
      let values = this.processValues(data);
      return [
        {
          key: this.translate.get("graphvolume"),
          values: values["scan_volume_in"],
          color: "#3498db",
        },
        {
          key: this.translate.get("graphvolume2"),
          values: values["scan_volume_out"],
          color: "#f9c922",
        },
        {
          key: this.translate.get("graphvolume3"),
          values: values["total_carga"],
          color: "#e74c3c",
        },
      ];
    }
  }
  processValues(data: any) {
    let values = {
      scan_volume_in: [],
      scan_volume_out: [],
      total_carga: [],
    };
    data.forEach(function (d) {
      let date = d.fecha;
      let scan_volume_in = d.volumen_entrada;
      let scan_volume_out = d.volumen_salida;
      let total_carga = d.balance;

      let entrada = {
        x: date,
        y: scan_volume_in,
      };

      let entrada2 = {
        x: date,
        y: scan_volume_out,
      };

      let entrada3 = {
        x: date,
        y: total_carga,
      };

      values["scan_volume_in"].push(entrada);
      values["scan_volume_out"].push(entrada2);
      values["total_carga"].push(entrada3);
    });

    return values;
  }
}
