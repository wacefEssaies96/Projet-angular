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
  public nbrFemme: number;
  public nbrHomme: number;

  constructor(private as: AdvancedServicesService) { }

  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    this.as.getNbrEtudiantBySexe('femme').subscribe(
      (data) => {
        this.nbrFemme = data;
        this.as.getNbrEtudiantBySexe('homme').subscribe(
          (data) => {
            this.nbrHomme = data;
            this.chart = new Chart("MyChart", {
              type: 'pie',
        
              data: {
                labels: ['Homme', 'Femme'],
                datasets: [{
                  data: [this.nbrHomme,this.nbrFemme]
                }]
              },
              options: {
                aspectRatio: 2.5
              }
        
            });
          }
        );
      }
    );
    
    
  }

}
