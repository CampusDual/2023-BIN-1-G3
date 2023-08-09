import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
// import { ViewChild } from "@angular/core";
// import {
//   OChartComponent,
//   DataAdapterUtils,
//   LineChartConfiguration,
//   LinePlusBarFocusChartConfiguration,
//   ChartService,
// } from "ontimize-web-ngx-charts";
// import { FilterExpressionUtils, Expression } from "ontimize-web-ngx";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})

export class HomeComponent implements OnInit {

  constructor(private router: Router, private actRoute: ActivatedRoute) {

  }

  ngOnInit() {
    // nothing to do
  }


}
