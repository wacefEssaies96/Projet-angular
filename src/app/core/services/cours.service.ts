import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cours } from '../model/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  public url=environment.url+'/cours'
  public list: Cours[]
  constructor(private httpclient: HttpClient ) { }

  displayCours(){
    return this.httpclient.get<Cours[]>(this.url+'/displayAllCours')
  }
  addCours(c:Cours){
    return this.httpclient.post(this.url+'/addCours', c)
  }
  deleteCours(idCours: number){
    return this.httpclient.delete(this.url+'/deleteCours/'+idCours)
  }
  updateCours(c:Cours){
    return this.httpclient.put(this.url+'/updateCours', c)
  }
  getCoursById(idCour:number){
    return this.httpclient.get<Cours>(this.url+'/displayCours/'+idCour)
  }
}
