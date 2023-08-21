import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  // public closedSidenavImage: string;
  // public openedSidenavImage: string;
  // constructor(protected router: Router, protected themeService: ThemeService) {
  //   this.checkSidenavImage();
  //   themeService.onThemeUpdate.subscribe(() => this.checkSidenavImage());
  // }

  // openAbout() {
  //   this.router.navigate(["/main/about"]);
  // }

  // checkSidenavImage() {
  //   let path = 'assets/images/';
  //   this.closedSidenavImage = path + (this.themeService.currentTheme.href.indexOf('ontimize-implatform') > -1 ? 'trunks.png' : 'trunks.png');
  //   this.openedSidenavImage = path + (this.themeService.currentTheme.href.indexOf('ontimize-implatform') > -1 ? 'trunks.png' : 'trunks.png');
  // }
}
