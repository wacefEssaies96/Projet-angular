import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  public url = environment.url + '/etudiant'
  
  constructor(private http : HttpClient) { }

  getAllEtudiants(){
    return this.http.get<Etudiant[]>(this.url+'/display');
  }
  addEtudiant(e: Etudiant){
    return this.http.post(this.url+'/ajouter',e);
  }
  deleteEtudiant(id: number){
    return this.http.delete(this.url+'/supprimer/'+id);
  }
  updateEtudiant(e: Etudiant){
    return this.http.put(this.url+'/modifier', e);
  }
  getEtudiantByID(id: number){
    return this.http.get<Etudiant>(this.url+'/display/etudiant/'+id);
  }
  
}
