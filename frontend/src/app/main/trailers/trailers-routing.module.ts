import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailersHomeComponent } from './trailers-home/trailers-home.component';
import { TrailersDetailComponent } from './trailers-detail/trailers-detail.component';


const routes: Routes =  [{
  path : '',
  component: TrailersHomeComponent
},
{
  path: ":id_trailer",
  component: TrailersDetailComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrailersRoutingModule { }
