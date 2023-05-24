import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-column-charts',
  templateUrl: './column-charts.component.html',
  styleUrls: ['./column-charts.component.css']
})
export class ColumnChartsComponent implements AfterViewInit{

  //Integrate AdminLTM ChartJS
  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/column-charts.js';
    document.body.appendChild(script);
  }

}
