import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Universite } from '../model/universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteServiceService {

  public url=environment.url+'/universite'
  public list: Universite[]=[]
  constructor(private httpclient: HttpClient ) { }
  displayUniversites(){
    return this.httpclient.get<Universite[]>(this.url+'/displayUniversites')
  }
  addUniversite(u:Universite){
    return this.httpclient.post(this.url+'/addUniversite', u)
  }
  deleteUniversite(idUniver: number){
    return this.httpclient.delete(this.url+'/deleteUniversite/'+idUniver)
  }
  updateUniversite(u:Universite){
    return this.httpclient.put(this.url+'/updateUniversite', u)
  }
  getUniversiteById(idUniver:number){
    return this.httpclient.get<Universite>(this.url+'/displayUniversite/'+idUniver)
  }
  getUniversiteByName(name:string){
    return this.httpclient.get<Universite>(this.url+'/displayUniversiteByName/'+name)
  }
  assignUniversityToDepartement(idUniv: number,idDepartement:number){
    return this.httpclient.get(this.url+'/assignUnivDepJpql/'+idUniv+'/'+idDepartement)
  }
  getUniversitiesSortedWithAnyField(field: String){
    return this.httpclient.get<Universite[]>(this.url+'/getUniversitesWithSort'+field)
  }
}
