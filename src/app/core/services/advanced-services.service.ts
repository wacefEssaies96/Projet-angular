import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Universite } from '../model/universite';

@Injectable({
  providedIn: 'root'
})
export class AdvancedServicesService {

  public url = environment.url;
  public ContratControllerName = '/contrat';
  public CoursControllerName = '/cours';
  public DepartementControllerName = '/departement';
  public EquipeControllerName = '/equipe';
  public EtudiantControllerName = '/etudiant';
  public ProjetControllerName = '/projet';
  public StageControllerName = '/stage';
  public UniversiteControllerName = '/universite';

  constructor(
    private httpclient : HttpClient
  ) { }

  
  assignEtudiantToDepartement(idE: number, idD: number){
    return this.httpclient.get(this.url+this.EtudiantControllerName+'/assign-etudiant-departement/'+idE+'/'+idD);
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
