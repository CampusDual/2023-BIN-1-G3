import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/theme-service';
import { Util } from 'ontimize-web-ngx';


@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    private _themeService: ThemeService
  ) {
    const theme = this._themeService.getStoredTheme();
    if (!Util.isDefined(theme)) {
      this._themeService.currentTheme = this._themeService.getDefaultTheme();
      this._themeService.storeTheme(this._themeService.currentTheme);
    } else {
      this._themeService.installTheme(theme);
    }
  }

    // ngOnInit(): void {
  //   // Cambiar el tema al iniciar la página
  //   const initialTheme = this._themeService.getDefaultTheme() /* Obtener el tema inicial */;
  //   this._themeService.installTheme(initialTheme);
  // }
}
