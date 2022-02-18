import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enquete } from 'src/model/enquete';
import { EnqueteService } from 'src/service/enquete.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-enquete',
  templateUrl: './add-enquete.component.html',
  styleUrls: ['./add-enquete.component.scss']
})
export class AddEnqueteComponent implements OnInit {
  enquete : Enquete = new Enquete();
  constructor(private route : ActivatedRoute, private enqueteService : EnqueteService) { }

  ngOnInit(): void {
  }

  createenquete() : void {

    this.enqueteService.createEnquete(this.enquete)
    .then(res =>{
      console.log(res);
     Swal.fire(
       'Created',
       'Le Formulaire a été remplit avec succès !',
       'success',
     );

    }).catch(err=>{
      console.log(err);
      Swal.fire(
        'Not Created',
        'Vous devez remplir tout les champs !',
        'error',
      );
    })
  }
}
