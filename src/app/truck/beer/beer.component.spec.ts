import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerComponent } from './beer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { BeerService } from '../../shared/service/beer.service';
import { BeerStub } from '../../shared/service/beer.stub';

describe('BeerComponent', () => {
  let component: BeerComponent;
  let fixture: ComponentFixture<BeerComponent>;
  let service: BeerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerComponent ],
      providers: [ { provider: BeerService, useClass: BeerStub}] ,
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(BeerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should create on Oninit comp with BeerDatas greater than ZERO.', () => {
    spyOn(service, 'buildBeerModel').and.callThrough();
    component.ngOnInit();
    expect(component.beerDatas.length).toBeGreaterThan(0);
  });

});
