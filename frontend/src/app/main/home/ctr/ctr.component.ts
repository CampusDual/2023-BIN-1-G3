import { Component, OnInit } from '@angular/core';
import { CtrService } from 'src/app/shared/ctr.service';

@Component({
  selector: 'app-ctr',
  templateUrl: './ctr.component.html',
  styleUrls: ['./ctr.component.css'],
  providers: [CtrService]
})
export class CtrComponent implements OnInit {

  contador: number = 0;

  constructor(private ctr: CtrService) { }

  ngOnInit() {
  }

  incrementar(event: Event) {
    this.contador++;
    this.ctr.add();
  }

  decrementar(event : Event) {
    this.contador--;
    this.ctr.dec();
  }

}
