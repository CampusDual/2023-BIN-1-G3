import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    MainRoutingModule,
    MatIconModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
