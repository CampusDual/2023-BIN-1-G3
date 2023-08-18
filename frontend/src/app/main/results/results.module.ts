import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsHomeComponent } from './results-home/results-home.component';
import { ResultsDetailComponent } from './results-detail/results-detail.component';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OntimizeWebModule,
    ResultsRoutingModule,
    OChartModule
  ],
  declarations: [ResultsHomeComponent, ResultsDetailComponent]
})
export class ResultsModule { }
