import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoPage } from './pages/demo/demo.page';

const routes: Routes = [
  { path: '', component: DemoPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
