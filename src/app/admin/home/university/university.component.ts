import { Component, OnInit } from '@angular/core';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  public chart: any;
  public labels: string[];
  public data: number[];

  constructor(private as: AdvancedServicesService) { }

  ngOnInit(): void {
    this.labels = new Array();
    this.data = new Array();
    this.as.getNbrUniversiteByTypeuniv().subscribe(
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
    this.chart = new Chart("chartUniversity", {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: "",
            data: this.data,
          },
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
  
}
