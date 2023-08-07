import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CtrComponent } from './ctr/ctr.component';
import { OChartModule } from 'ontimize-web-ngx-charts';


@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeRoutingModule,
    OChartModule

  ],
  declarations: [
    HomeComponent,
    CtrComponent
  ]
})
export class HomeModule { }
