import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWhiskerChartsComponent } from './box-whisker-charts.component';

describe('BoxWhiskerChartsComponent', () => {
  let component: BoxWhiskerChartsComponent;
  let fixture: ComponentFixture<BoxWhiskerChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxWhiskerChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxWhiskerChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
