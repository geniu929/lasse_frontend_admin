import { Component, OnInit } from '@angular/core';
import { EnqueteService } from 'src/service/enquete.service';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {
  enquete: any;
  cM : number = 0;
  cF : number = 0;
  cP : number = 0;
  cE : number = 0;
  cM3 : number = 0;
  nbrCDI : number = 0;
  constructor(private  enqueteService: EnqueteService) { }

  public pieChartLabels = ['PLS', 'EI2D', 'M3IR'];
  public pieChartData = [this.cP, this.cE, this.cM3];
  public pieChartType = 'pie';


  public pieChartLabels2 = ['Femme', 'Homme'];
  public pieChartData2 = [this.cF, this.cM];
  public pieChartType2 = 'pie';


  public pieChartLabels3 = ['CDI trouvé', 'En cours de recherche'];
  public pieChartData3 = [this.nbrCDI, 100 - this.nbrCDI];
  public pieChartType3 = 'pie';


  public pieChartLabels4 = [];
  public pieChartData4 = [];
  ngOnInit(): void {
    this.enqueteService.getEnquete().then(resp => {
      console.log(resp);
      this.enquete = resp;
      this.enquete.forEach(e => {
        this.nbrCDI= this.nbrCDI+1;
     this.pieChartLabels4.push(e.entreprise);
     this.pieChartData4.push(1);

     if(e.sexe == "Femme"){
    this.cF = this.cF + 1;
     }
     if(e.sexe == "Homme"){
      this.cM = this.cM + 1;
       }
       this.pieChartData3 = [this.nbrCDI, 130 - this.nbrCDI];
    this.pieChartData2 = [this.cF, this.cM];
      });
      this.enquete.forEach(e => {
        if(e.formation === "PLS"){
       this.cP = this.cP + 1;
        }
        if(e.formation === "EI2D"){
         this.cE = this.cE + 1;
          }
          if(e.formation === "M3IR"){
            this.cM3 = this.cM3 + 1;
             }

 this.pieChartData = [this.cP, this.cE, this.cM3];
         });
    }).catch(err => {
      console.log(err);
    });


  }

}
