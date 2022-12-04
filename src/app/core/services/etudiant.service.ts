import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(localStorage.getItem("username") + ':' + localStorage.getItem("password")) });
    return this.http.get<Etudiant[]>(this.url+'/display', {headers});
  }
  addEtudiant(e: Etudiant) : any{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(localStorage.getItem("username") + ':' + localStorage.getItem("password")) });
    return this.http.post(this.url+'/ajouter',e,{headers});
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
  assignEtudiantToDepartement(idE: number, idD: number){
    return this.http.get(this.url+'/assign-etudiant-departement/'+idE+'/'+idD);
  }
  
}
