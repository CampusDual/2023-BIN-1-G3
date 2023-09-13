import { Component, OnInit } from "@angular/core";
import { PieChartConfiguration } from "ontimize-web-ngx-charts";

@Component({
  selector: "app-areas-home",
  templateUrl: "./areas-home.component.html",
  styleUrls: ["./areas-home.component.css"],
})
export class AreasHomeComponent implements OnInit {
  chartParameters: PieChartConfiguration;
  constructor() {
    this.chartParameters = new PieChartConfiguration();
    this.chartParameters.showLeyend = false;
  }

  ngOnInit() {}
}
