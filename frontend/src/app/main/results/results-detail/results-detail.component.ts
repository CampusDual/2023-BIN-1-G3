import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-detail',
  templateUrl: './results-detail.component.html',
  styleUrls: ['./results-detail.component.css']
})
export class ResultsDetailComponent implements OnInit {

  @Input() symbol: string = 'm';

  constructor() { }

  ngOnInit() {
  }

}
