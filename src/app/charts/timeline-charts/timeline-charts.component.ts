import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-timeline-charts',
  templateUrl: './timeline-charts.component.html',
  styleUrls: ['./timeline-charts.component.css']
})
export class TimelineChartsComponent implements AfterViewInit{

   //Integrate AdminLTM ChartJS
   ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/timeline-charts.js';
    document.body.appendChild(script);
  }

}
