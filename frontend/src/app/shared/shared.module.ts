import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CapitalizePipe } from './capitalize.pipe';
import { ResultsStateRenderComponent } from '../main/results/results-home/results-state-render/results-state-render.component';
import { CheckRenderComponent } from './check-render/check-render.component';

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
    CapitalizePipe,
    ResultsStateRenderComponent,
    CheckRenderComponent
  ],
  exports: [
    CommonModule,
    CapitalizePipe,
    ResultsStateRenderComponent,
    CheckRenderComponent
  ]
})
export class SharedModule { }
