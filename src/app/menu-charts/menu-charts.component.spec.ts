import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChartsComponent } from './menu-charts.component';

describe('MenuChartsComponent', () => {
  let component: MenuChartsComponent;
  let fixture: ComponentFixture<MenuChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
