import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { OFormComponent } from "ontimize-web-ngx";

@Component({
  selector: "app-results-detail",
  templateUrl: "./results-detail.component.html",
  styleUrls: ["./results-detail.component.css"],
})
export class ResultsDetailComponent implements OnInit {
  @Input() symbol: string = "m";

  @ViewChild("form", { static: false }) form: OFormComponent;
  // @ViewChild("form", { static: false }) form: OFormComponent;

  constructor() {}

  ngOnInit() {}

  exportPDF() {
    // var doc = new jsPDF("l", "mm", "a4", 1);
    // doc.addImage(logo, "PNG", 15, 40, 50, 100);

    const div = document.getElementById("form");
    const options = {
      background: "white",
      scale: 3,
    };

    html2canvas(div, options)
      .then((canvas) => {
        var img = canvas.toDataURL("image/PNG");
        canvas.toDataURL("image/PNG");
        // Problemas con el logo!!
        // var logo = new Image();
        // logo.src = "assets/images/trunksc.png";
        var doc1 = new jsPDF("l", "mm", "a4", 1);

        // Add image Canvas to PDF
        const bufferX = 1;

        const bufferY = 1;
        // const imgProps = (<any>doc).getImageProperties(img);
        const pdfWidth = doc1.internal.pageSize.getWidth() - 2 * bufferX;
        // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        doc1.addImage(
          img,
          "PNG",
          bufferX,
          bufferY,
          pdfWidth,
          50,
          // pdfHeight,
          undefined,
          "FAST"
        );

        return doc1;
      })
      .then((doc1) => {
        doc1.save("justificantecarga.pdf");
      });
  }
}
