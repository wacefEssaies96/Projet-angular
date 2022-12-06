import { Component, OnInit } from '@angular/core';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  public chart: any;
  public labels: string[];
  public data: number[];

  constructor(private as: AdvancedServicesService) { }

  ngOnInit(): void {
    this.labels = new Array();
    this.data = new Array();
    this.as.getNbrContratBySpecialite().subscribe(
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
    this.chart = new Chart("chartContracts", {
      type: 'polarArea',
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
