import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { ResultsDetailComponent } from './results-detail/results-detail.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersHomeComponent, ResultsDetailComponent]
})
export class CustomersModule { }
