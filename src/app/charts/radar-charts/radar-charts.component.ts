import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-radar-charts',
  templateUrl: './radar-charts.component.html',
  styleUrls: ['./radar-charts.component.css']
})
export class RadarChartsComponent implements AfterViewInit{

  //Integrate AdminLTM ChartJS
  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/radar-charts.js';
    document.body.appendChild(script);
  }

}
