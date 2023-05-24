import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import ApexCharts from 'apexcharts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { LineChartsComponent } from './charts/line-charts/line-charts.component';
import { AreaChartsComponent } from './charts/area-charts/area-charts.component';
import { MixedChartsComponent } from './charts/mixed-charts/mixed-charts.component';
import { ColumnChartsComponent } from './charts/column-charts/column-charts.component';
import { BarChartsComponent } from './charts/bar-charts/bar-charts.component';
import { RangeAreaChartsComponent } from './charts/range-area-charts/range-area-charts.component';
import { TimelineChartsComponent } from './charts/timeline-charts/timeline-charts.component';
import { CandlestickChartsComponent } from './charts/candlestick-charts/candlestick-charts.component';
import { BoxWhiskerChartsComponent } from './charts/box-whisker-charts/box-whisker-charts.component';
import { PieChartsComponent } from './charts/pie-charts/pie-charts.component';
import { RadarChartsComponent } from './charts/radar-charts/radar-charts.component';
import { PolarAreaChartsComponent } from './charts/polar-area-charts/polar-area-charts.component';
import { MenuChartsComponent } from './menu-charts/menu-charts.component';
import { RadialBarChartsComponent } from './charts/radial-bar-charts/radial-bar-charts.component';
import { TreemapChartsComponent } from './charts/treemap-charts/treemap-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    LineChartsComponent,
    AreaChartsComponent,
    MixedChartsComponent,
    ColumnChartsComponent,
    BarChartsComponent,
    RangeAreaChartsComponent,
    TimelineChartsComponent,
    CandlestickChartsComponent,
    BoxWhiskerChartsComponent,
    PieChartsComponent,
    RadarChartsComponent,
    PolarAreaChartsComponent,
    MenuChartsComponent,
    RadialBarChartsComponent,
    TreemapChartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ApexCharts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
