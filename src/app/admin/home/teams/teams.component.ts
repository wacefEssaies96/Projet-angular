import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public chart: any;
  public labels: string[];
  public data: number[];

  constructor(private as: AdvancedServicesService) { }

  ngOnInit(): void {
    this.labels = new Array();
    this.data = new Array();
    this.as.getNbrEquipeByNiveau().subscribe(
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
    this.chart = new Chart("chartTeams", {
      type: 'doughnut',
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
