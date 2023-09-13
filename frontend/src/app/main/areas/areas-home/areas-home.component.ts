import { Component, OnInit } from "@angular/core";
import { PieChartConfiguration } from "ontimize-web-ngx-charts";
import { OTranslateService } from "ontimize-web-ngx";
import { Subscription } from "rxjs";

@Component({
  selector: "app-areas-home",
  templateUrl: "./areas-home.component.html",
  styleUrls: ["./areas-home.component.css"],
})
export class AreasHomeComponent implements OnInit {
  chartParameters: PieChartConfiguration;
  private translateServiceSubscription: Subscription;

  constructor(private translate: OTranslateService) {
    this.chartParameters = new PieChartConfiguration();
    this.chartParameters.cornerRadius = 20;
    // this.chartParameters.labelType = "value";
    this.chartParameters.showLeyend = false;
    this.chartParameters.showTooltip = true;
    this.chartParameters.noDataMessage = this.translate.get("noDataMessage");

    this.translateServiceSubscription = translate.onLanguageChanged.subscribe(
      () => {
        this.chartParameters.noDataMessage =
          this.translate.get("noDataMessage");
      }
    );
  }

  ngOnInit() {}

  public ngOnDestroy(): void {
    this.translateServiceSubscription.unsubscribe();
  }
}
