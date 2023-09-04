import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "ontimize-web-ngx";

import { MainComponent } from "./main.component";

export const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: "", redirectTo: "results", pathMatch: "full" },
      // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      {
        path: "areas",
        loadChildren: () =>
          import("./areas/areas.module").then((m) => m.AreasModule),
      },
      {
        path: "results",
        loadChildren: () =>
          import("./results/results.module").then((m) => m.ResultsModule),
      },
      {
        path: "trucks",
        loadChildren: () =>
          import("./trucks/trucks.module").then((m) => m.TrucksModule),
      },
      {
        path: "trailers",
        loadChildren: () =>
          import("./trailers/trailers.module").then((m) => m.TrailersModule),
      },
      {
        path: "graphs",
        loadChildren: () =>
          import("./graphs/graphs.module").then((m) => m.GraphsModule),
      },
      {
        path: "graph_volumes",
        loadChildren: () =>
          import("./graph-volumes/graph-volumes.module").then(
            (m) => m.GraphVolumesModule
          ),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("./settings/settings.module").then((m) => m.SettingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
