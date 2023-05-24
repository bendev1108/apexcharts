import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-box-whisker-charts',
  templateUrl: './box-whisker-charts.component.html',
  styleUrls: ['./box-whisker-charts.component.css']
})
export class BoxWhiskerChartsComponent implements AfterViewInit{

  //Integrate AdminLTM ChartJS
  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/box-whisker-charts.js';
    document.body.appendChild(script);
  }

}
