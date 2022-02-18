import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enquete } from 'src/model/enquete';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {

  constructor(
    private httpClient: HttpClient,
    private apiService : ApiService
  ) { }

  public createEnquete(enquete : Enquete) {

    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type' : 'application/json',
              });

        this.apiService.post('/apiserver', enquete , {headers:headers}).then(resp =>{
          resolve(resp);

        }).catch(err=>{
          reject(err);
        });
    })
  }


  public getEnquete() {

    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type' : 'application/json',
              });
        this.apiService.get('/apiserver', {headers:headers}).then(resp =>{
          resolve(resp)

        }).catch(err=>{
          reject(err);
        });
    })
  }

  public getFiliere() {

    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type' : 'application/json',
              });
        this.apiService.get('/getfilieres', {headers:headers}).then(resp =>{
          resolve(resp)

        }).catch(err=>{
          reject(err);
        });
    })
  }

  public deleteEnquete(id){

    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type' : 'application/json',
              });
        this.apiService.get('/apiserver/'+ id , {headers:headers}).then(resp =>{
          resolve(resp)

        }).catch(err=>{
          reject(err);
        });
    })
  }
}
