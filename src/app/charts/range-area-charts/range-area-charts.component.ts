import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-range-area-charts',
  templateUrl: './range-area-charts.component.html',
  styleUrls: ['./range-area-charts.component.css']
})
export class RangeAreaChartsComponent implements AfterViewInit{

   //Integrate AdminLTM ChartJS
   ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/range-area-charts.js';
    document.body.appendChild(script);
  }

}
