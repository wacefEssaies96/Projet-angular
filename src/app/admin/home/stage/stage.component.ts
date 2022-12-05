import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  public chart: any;
  public labels: string[];
  public data: number[];

  constructor(private as: AdvancedServicesService) { }

  ngOnInit(): void {
    this.labels = new Array();
    this.data = new Array();
    this.as.getNbrStageByType().subscribe(
      (data) => {
        for (let i = 0; i < data.length; i++) {
          this.labels.push(data[i][1])
          this.data.push(data[i][0])
        }
        this.createChart();
      }
    )

  }
  createChart() {
    this.chart = new Chart("chartStage", {
      type: 'radar',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.data
          },
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

}
