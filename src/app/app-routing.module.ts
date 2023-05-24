import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaChartsComponent } from './charts/area-charts/area-charts.component';
import { BarChartsComponent } from './charts/bar-charts/bar-charts.component';
import { BoxWhiskerChartsComponent } from './charts/box-whisker-charts/box-whisker-charts.component';
import { CandlestickChartsComponent } from './charts/candlestick-charts/candlestick-charts.component';
import { ColumnChartsComponent } from './charts/column-charts/column-charts.component';
import { LineChartsComponent } from './charts/line-charts/line-charts.component';
import { MixedChartsComponent } from './charts/mixed-charts/mixed-charts.component';
import { PieChartsComponent } from './charts/pie-charts/pie-charts.component';
import { PolarAreaChartsComponent } from './charts/polar-area-charts/polar-area-charts.component';
import { RadarChartsComponent } from './charts/radar-charts/radar-charts.component';
import { RadialBarChartsComponent } from './charts/radial-bar-charts/radial-bar-charts.component';
import { RangeAreaChartsComponent } from './charts/range-area-charts/range-area-charts.component';
import { TimelineChartsComponent } from './charts/timeline-charts/timeline-charts.component';

const routes: Routes = [
  {path: 'line charts', component: LineChartsComponent},
  {path: 'area charts', component: AreaChartsComponent},
  {path: 'column charts', component: ColumnChartsComponent},
  {path: 'bar charts', component: BarChartsComponent},
  {path: 'mixed charts', component: MixedChartsComponent},
  {path: 'range area charts', component: RangeAreaChartsComponent},
  {path: 'timeline charts', component: TimelineChartsComponent},
  {path: 'candlestick charts', component: CandlestickChartsComponent},
  {path: 'box & whisker charts', component: BoxWhiskerChartsComponent},
  {path: 'pie charts', component: PieChartsComponent},
  {path: 'radar charts', component: RadarChartsComponent},
  {path: 'polar area charts', component: PolarAreaChartsComponent},
  {path: 'radial bar charts', component: RadialBarChartsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
