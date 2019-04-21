import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../shared/service/beer.service';
import { BeerModel } from '../../shared/model/beer.model';
import { MessageEnum } from '../../shared/enums/message.enum'; 

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beerDatas: BeerModel[] = [];
  constructor(private beerService: BeerService) { }

  ngOnInit() {
    console.log(this.beerService.buildBeerModel());
    this.beerDatas = this.beerService.buildBeerModel();
  }

  increaseTemperature(beer: BeerModel): void {
    beer.temperature += 0.5;
    this.stateContainer(beer);
  }

  decreaseTemperature(beer: BeerModel): void {
    beer.temperature -= 0.5;
    this.stateContainer(beer);
  }

  stateContainer(beer: BeerModel): void {
    const outRange = this.beerService.calculateMediaTemperature(beer.maxTemperature, beer.minTemperature);
    beer.warning = this.beerService.stateContainer(beer);
  }

}
