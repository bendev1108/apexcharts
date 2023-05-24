import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-polar-area-charts',
  templateUrl: './polar-area-charts.component.html',
  styleUrls: ['./polar-area-charts.component.css']
})
export class PolarAreaChartsComponent implements AfterViewInit{

  //Integrate AdminLTM ChartJS
  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/polar-area-charts.js';
    document.body.appendChild(script);
  }

}
