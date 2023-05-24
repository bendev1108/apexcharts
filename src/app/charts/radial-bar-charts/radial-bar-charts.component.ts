import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-radial-bar-charts',
  templateUrl: './radial-bar-charts.component.html',
  styleUrls: ['./radial-bar-charts.component.css']
})
export class RadialBarChartsComponent implements AfterViewInit{

  //Integrate AdminLTM ChartJS
  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/radial-bar-charts.js';
    document.body.appendChild(script);
  }

}
