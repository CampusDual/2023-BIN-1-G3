import { Component, OnInit, ViewChild } from '@angular/core';
import { OTableComponent, OTranslateService } from "ontimize-web-ngx";
import { Subscription } from "rxjs";
import { FilterExpressionUtils, Expression } from "ontimize-web-ngx";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-trucks-home',
  templateUrl: './trucks-home.component.html',
  styleUrls: ['./trucks-home.component.css']
})

export class TrucksHomeComponent implements OnInit {
  private translateServiceSubscription: Subscription;
  public array: Object[];

  constructor(private translate: OTranslateService) {
    this.array = [
      {
        key: 1,
        value: "Articulado",
      },
      {
        key: 2,
        value: "No Articulado",
      },
    ];

  }

  public ngOnDestroy(): void {
    if (this.translateServiceSubscription) {
      this.translateServiceSubscription.unsubscribe();
    }
  }

  public getDataArray(): any[] {

    return this.array;

  }

  public getValueSimple(): any {
    return 0;
  }

  ngOnInit() {}
  createFilter(values: Array<{ attr; value }>): Expression {
    // Prepare simple expressions from the filter components values
    let filters: Array<Expression> = [];
    values.forEach((fil) => {
      if (fil.value === 1) {
        if (fil.attr === "checkTruck") {
          filters.push(
            FilterExpressionUtils.buildExpressionEquals("type_of_truck", 0)
          );
        }
      }
      if (fil.value === 2) {
        if (fil.attr === "checkTruck") {
          filters.push(
            FilterExpressionUtils.buildExpressionEquals("type_of_truck", 1)
          );
        }
      }
    });

    // Build complex expression
    if (filters.length > 0) {
      return filters[0];
    } else {
      return null;
    }
  }

  @ViewChild('truckTable', { static: false }) truckTable: OTableComponent;

  exportExcel()
  {
    let data = this.truckTable.getAllValues();
    data.forEach((fil) => {
      if (fil['type_of_truck'] === 0) {
        fil['checkTruck'] = this.translate.get("Yes");
      }
      else {
        fil['checkTruck'] = this.translate.get("No");
      }
      delete fil["type_of_truck"];
      delete fil["id_truck"];
    });
    // const updatedArray = data.map(({ ["id_truck"]: _, ...rest }) => rest);
    const ws: XLSX.WorkSheet= XLSX.utils.json_to_sheet(data);
    // ws['!cols'][7] = { hidden: true };
    ws['A1']['v'] = this.translate.get('viajes_completados');
    ws['B1']['v'] = this.translate.get('total_carga');
    ws['C1']['v'] = this.translate.get('viajes_carga');
    ws['D1']['v'] = this.translate.get('viajes_descarga');
    ws['E1']['v'] = this.translate.get('total_cargado');
    ws['F1']['v'] = this.translate.get('total_descargado');
    ws['G1']['v'] = this.translate.get('plate');
    ws['H1']['v'] = this.translate.get('checkTruck');

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Trucks');

    /* save to file */
    XLSX.writeFile(wb, 'Trucks.xlsx');
  }
}
