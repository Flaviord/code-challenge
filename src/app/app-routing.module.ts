import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckComponent } from './truck/truck.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/truck' },
  { path: 'truck', component: TruckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
