import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { TrucksRoutingModule } from './trucks-routing.module';
import { TrucksHomeComponent } from './trucks-home/trucks-home.component';


@NgModule({
  declarations: [TrucksHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    TrucksRoutingModule
  ]
})
export class TrucksModule { }
