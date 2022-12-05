import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public chart: any;
  public labels: string[];
  public data: number[];

  constructor(private as: AdvancedServicesService) { }

  ngOnInit(): void {
    this.labels = new Array();
    this.data = new Array();
    this.as.getNbrEtudiantBySexe().subscribe(
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
    this.chart = new Chart("chartEtudiant", {
      type: 'pie',
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
