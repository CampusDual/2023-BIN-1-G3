import { Component, OnInit,ViewChild, TemplateRef, Injector } from '@angular/core';
import { OBaseTableCellRenderer } from 'ontimize-web-ngx';

@Component({
  selector: 'app-check-render',
  templateUrl: './check-render.component.html',
  styleUrls: ['./check-render.component.css']
})
export class CheckRenderComponent extends OBaseTableCellRenderer {
  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }


  /* Metodo que formatee el contenido de la celda */
  getCellData(cellvalue: any, rowvalue?: any): string{
    //return "funciona";
    return rowvalue['ttype']?"❌":"✅";
  }

}
