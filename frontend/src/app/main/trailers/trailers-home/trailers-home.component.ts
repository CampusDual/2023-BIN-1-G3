import { Component, OnInit, ViewChild } from "@angular/core";
import { OTableComponent, OTranslateService } from "ontimize-web-ngx";
import { Subscription } from "rxjs";
import { FilterExpressionUtils, Expression } from "ontimize-web-ngx";
import * as XLSX from "xlsx";

@Component({
  selector: "app-trailers-home",
  templateUrl: "./trailers-home.component.html",
  styleUrls: ["./trailers-home.component.css"],
})
export class TrailersHomeComponent implements OnInit {
  constructor(private translate: OTranslateService) {}

  ngOnInit() {}

  @ViewChild("trailerTable", { static: false }) trailerTable: OTableComponent;

  exportExcel() {
    let data = this.trailerTable.getAllRenderedValues();

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    ws["!cols"] = [];
    Object.keys(data[0]).forEach((cell: any) => {
      const colWidth = 145;
      ws["!cols"].push({
        wpx: colWidth,
      });
    });
    ws["A1"]["v"] = this.translate.get("trailer_plate");
    ws["B1"]["v"] = this.translate.get("viajes_completados");
    ws["C1"]["v"] = this.translate.get("total_carga");
    ws["D1"]["v"] = this.translate.get("viajes_carga");
    ws["E1"]["v"] = this.translate.get("viajes_descarga");
    ws["F1"]["v"] = this.translate.get("total_cargado");
    ws["G1"]["v"] = this.translate.get("total_descargado");

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Trailers");

    /* save to file */
    XLSX.writeFile(wb, "Trailers.xlsx", { cellStyles: true });
  }
}
