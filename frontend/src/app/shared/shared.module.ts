import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
    CapitalizePipe
  ],
  exports: [
    CommonModule,
    CapitalizePipe
  ]
})
export class SharedModule { }
