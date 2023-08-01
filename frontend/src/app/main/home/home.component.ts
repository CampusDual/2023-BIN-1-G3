import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentTime: Date;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // nothing to do
    this.updateTime();
    setInterval(()=>this.updateTime(), 1000)
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

  updateTime() : void {
    this.currentTime = new Date();
  }

}
