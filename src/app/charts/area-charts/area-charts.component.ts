import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-area-charts',
  templateUrl: './area-charts.component.html',
  styleUrls: ['./area-charts.component.css']
})
export class AreaChartsComponent implements AfterViewInit{

  //Integrate AdminLTM ChartJS
  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/area-charts.js';
    document.body.appendChild(script);
  }

}
