import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { GraphsRoutingModule } from './graphs-routing.module';
import { GraphsHomeComponent } from './graphs-home/graphs-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';

@NgModule({
  declarations: [GraphsHomeComponent],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    OntimizeWebModule,
    OChartModule
  ]
})
export class GraphsModule { }
