import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckComponent } from './truck.component';
import { BeerComponent } from './beer/beer.component';

@NgModule({
  declarations: [TruckComponent, BeerComponent],
  imports: [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TruckModule { }
