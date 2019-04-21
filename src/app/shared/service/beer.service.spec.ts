import { TestBed } from '@angular/core/testing';

import { BeerService } from './beer.service';
import { BeerStub } from './beer.stub';
import { BeerModel } from '../model/beer.model';

let service: BeerService;
const stub = BeerStub;

describe('BeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: []
    });
    service = TestBed.get(BeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create Beer model', () => {
    const beer = service.buildBeerModel();
    expect(beer).toEqual(stub.buildBeerModel());
  });

  it('should calculate media temperature between -4 and -6', () => {
    const beer = service.calculateMediaTemperature(-4, -6);
    expect(beer).toBe(stub.calculateMediaTemperature(-4, -6));
  });

  it('should return Good', () => {
    const beer = new BeerModel('Pilsner', -4, -6, -5, 'Good');
    const good: string = service.stateContainer(beer);
    expect(good).toBe(stub.stateContainerGood());
  });
  it('should return ABOVE', () => {
    const beer = new BeerModel('Pilsner', -4, -6, -3, 'Good');
    const above: string = service.stateContainer(beer);
    expect(above).toBe(stub.stateContainerAbove());
  });
  it('should return BELOW', () => {
    const beer = new BeerModel('Pilsner', -4, -6, -7, 'Good');
    const below: string = service.stateContainer(beer);
    expect(below).toBe(stub.stateContainerBelow());
  });

});

