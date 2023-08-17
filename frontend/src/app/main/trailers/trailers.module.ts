import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { TrailersRoutingModule } from './trailers-routing.module';
import { TrailersHomeComponent } from './trailers-home/trailers-home.component';

@NgModule({
  declarations: [TrailersHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    TrailersRoutingModule
  ]
})
export class TrailersModule { }
