import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlestickChartsComponent } from './candlestick-charts.component';

describe('CandlestickChartsComponent', () => {
  let component: CandlestickChartsComponent;
  let fixture: ComponentFixture<CandlestickChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandlestickChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandlestickChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
