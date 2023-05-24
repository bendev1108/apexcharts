import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent implements AfterViewInit{

   //Integrate AdminLTM ChartJS
   ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/pie-charts.js';
    document.body.appendChild(script);
  }

}
