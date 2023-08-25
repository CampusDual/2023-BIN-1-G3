import { Component, OnInit, Input } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-results-detail',
  templateUrl: './results-detail.component.html',
  styleUrls: ['./results-detail.component.css']
})
export class ResultsDetailComponent implements OnInit {

  @Input() symbol: string = 'm';

  constructor() { }

  ngOnInit() {
  };
  // tslint:disable-next-line:typedef
  footRows() {
    return [{
        id: 'ID',
        name: 'Name',
        email: 'Email',
        city: 'City',
        expenses: 'Sum'
    }];
};

  async nnn() {
    var doc = new jsPDF();
    doc.setFontSize(12);
    doc.setFontStyle('bold');
    doc.text('Theme "striped"', 14, 16); //default
    doc.autoTable({
        head: this.footRows(),
        body: document.getElementById('body'),
        startY: 20
    });
    doc.text('Theme "grid"', 14, doc.autoTable.previous.finalY + 10);
    doc.autoTable({
        head: this.footRows(),
        body: document.getElementById('body'),
        startY: doc.autoTable.previous.finalY + 14,
        theme: 'grid'
    });
    doc.text('Theme "plain"', 14, doc.autoTable.previous.finalY + 10);
    doc.autoTable({
        head: this.footRows(),
        body: document.getElementById('body'),
        startY: doc.autoTable.previous.finalY + 14,
        theme: 'plain'
    });
    return doc;
};
}
