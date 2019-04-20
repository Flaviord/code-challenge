import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckComponent } from './truck.component';
import { BeerComponent } from './beer/beer.component';

@NgModule({
  declarations: [TruckComponent, BeerComponent],
  imports: [
    CommonModule
  ]
})
export class TruckModule { }
