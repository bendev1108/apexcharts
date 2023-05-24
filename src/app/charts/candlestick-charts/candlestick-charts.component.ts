import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-candlestick-charts',
  templateUrl: './candlestick-charts.component.html',
  styleUrls: ['./candlestick-charts.component.css']
})
export class CandlestickChartsComponent implements AfterViewInit{

   //Integrate AdminLTM ChartJS
   ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/candlestick-charts.js';
    document.body.appendChild(script);
  }

}
