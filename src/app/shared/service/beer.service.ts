import { Injectable } from '@angular/core';
import { BeerModel } from '../model/beer.model';
import { MessageEnum } from '../enums/message.enum';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor() { }

  buildBeerModel(): BeerModel[] {
    return [
      new BeerModel('Pilsner', -4, -6, this.calculateMediaTemperature(-4, -6), 'Good'),
      new BeerModel('Ipa', -5, -6, this.calculateMediaTemperature(-5, -6) , 'Good'),
      new BeerModel('Lager', -4, -7, this.calculateMediaTemperature(-4, -7), 'Good'),
      new BeerModel('Stout', -6, -8, this.calculateMediaTemperature(-6, -8), 'Good'),
      new BeerModel('Wheat Beer', -3, -5, this.calculateMediaTemperature(-3, -5), 'Good'),
      new BeerModel('Pale Ale', -4, -6, this.calculateMediaTemperature(-4, -6), 'Good')
    ];
  }

  calculateMediaTemperature( max: number, min: number): number {
    return (min + max) / 2;
  }

  stateContainer(beer: BeerModel): string {
    const outRange = this.calculateMediaTemperature(beer.maxTemperature, beer.minTemperature);
    let message: string = MessageEnum.GOOD;
    if (beer.temperature > beer.maxTemperature) {
      message = MessageEnum.ABOVE;
    }
    if (beer.temperature < beer.minTemperature) {
      message = MessageEnum.BELOW;
    }
    if (outRange === beer.temperature) {
      message = MessageEnum.GOOD;
    }
    return message;
  }

}
