import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetailEquipe } from '../model/detailequipe';

@Injectable({
  providedIn: 'root'
})
export class DetailequipeService {

  public url= environment.url+'/detailequipe';
  constructor(private http: HttpClient) { }
  getAllDepartements(){
    return this.http.get<DetailEquipe[]>(this.url+'/display');
  }
  addDetailEquipe(detail:DetailEquipe){
    return this.http.post(this.url+'/ajouter', detail)
  }
  delete(id: number){
    return this.http.delete(this.url+'/supprimer/'+id);
  }
  updateDetailEquipe(detail:DetailEquipe){
    return this.http.put(this.url+'/modifier',detail);
  }
  findById(idDetailEquipe:number){
    return this.http.get<DetailEquipe>(this.url+'/display/detailequipe/'+idDetailEquipe);
  }

}
