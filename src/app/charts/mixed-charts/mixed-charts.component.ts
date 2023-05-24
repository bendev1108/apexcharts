import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mixed-charts',
  templateUrl: './mixed-charts.component.html',
  styleUrls: ['./mixed-charts.component.css']
})
export class MixedChartsComponent implements AfterViewInit{

  //Integrate AdminLTM ChartJS
  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/mixed-charts.js';
    document.body.appendChild(script);
  }

}
