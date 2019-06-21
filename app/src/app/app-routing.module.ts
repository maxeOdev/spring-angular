import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {VideoComponent} from "./video/video.component";

const routes: Routes = [
  { path: 'video', component: VideoComponent}
];
const routerOptions: ExtraOptions = {
  useHash: true
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
