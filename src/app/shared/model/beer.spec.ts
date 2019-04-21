import { BeerModel } from './beer.model';

describe('Beer', () => {
  it('should create an instance', () => {
    expect(new BeerModel('', 0, 0, 0, '')).toBeTruthy();
  });
  it('should build a beermodel', () => {
    const beer: BeerModel = new BeerModel('', 0, 0, 0, '');
    expect(new BeerModel('', 0, 0, 0, '')).toEqual(beer);
  });
});
