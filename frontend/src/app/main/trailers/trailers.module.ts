import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { TrailersRoutingModule } from './trailers-routing.module';
import { TrailersHomeComponent } from './trailers-home/trailers-home.component';
import { TrailersDetailComponent } from './trailers-detail/trailers-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TrailersHomeComponent, TrailersDetailComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    TrailersRoutingModule,
    SharedModule
  ]
})
export class TrailersModule { }
