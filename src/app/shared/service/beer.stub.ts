import { BeerModel } from '../model/beer.model';
import { MessageEnum } from '../enums/message.enum';

export class BeerStub {
   static buildBeerModel(): BeerModel[] {
        return [
            new BeerModel('Pilsner', -4, -6, this.calculateMediaTemperature(-4, -6), 'Good'),
            new BeerModel('Ipa', -5, -6, this.calculateMediaTemperature(-5, -6) , 'Good'),
            new BeerModel('Lager', -4, -7, this.calculateMediaTemperature(-4, -7), 'Good'),
            new BeerModel('Stout', -6, -8, this.calculateMediaTemperature(-6, -8), 'Good'),
            new BeerModel('Wheat Beer', -3, -5, this.calculateMediaTemperature(-3, -5), 'Good'),
            new BeerModel('Pale Ale', -4, -6, this.calculateMediaTemperature(-4, -6), 'Good')
          ];
      }

    static  calculateMediaTemperature( max: number, min: number): number {
        return (min + max) / 2;
      }

    static  stateContainerGood(): string {
        return  MessageEnum.GOOD;
      }

    static  stateContainerAbove(): string {
        return MessageEnum.ABOVE;
      }

    static  stateContainerBelow(): string {
        return MessageEnum.BELOW;
      }
}
