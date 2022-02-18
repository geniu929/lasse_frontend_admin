import { Component, OnInit } from '@angular/core';
import { EnqueteService } from 'src/service/enquete.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-resultat-enquete',
  templateUrl: './resultat-enquete.component.html',
  styleUrls: ['./resultat-enquete.component.scss']
})
export class ResultatEnqueteComponent implements OnInit {
  enquete: any;
  constructor(private  enqueteService: EnqueteService) { }


  ngOnInit(): void {
    this.enqueteService.getEnquete().then(resp => {
      console.log(resp);
      this.enquete = resp;
    }).catch(err => {
      console.log(err);
    });

  }

 deleteenquete(id): void {
console.log(id);
this.enqueteService.deleteEnquete(id)
    .then(res => {
      console.log(res);
      Swal.fire(
       'Deleted',
       'L enquete a été supprimé avec succès',
       'success',
     );

      const index = this.enquete.findIndex(x => x.id  === id);

      this.enquete.splice(index, 1);
    }).catch(err => {
      console.log(err);
      Swal.fire(
        'Not Deleted',
        'Erreur',
        'error',
      );
    });
  }
}
