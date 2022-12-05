import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contrat } from '../model/contrat';
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
  public DetaileEquipeControllerName = '/detailequipe';
  public ClubControllerName = '/club';

  constructor(
    private httpclient: HttpClient
  ) { }

  affectContratToEtudiant(nom : string,prenom : string, contrat: Contrat){
    return this.httpclient.post(this.url+this.ContratControllerName+'/affect-contrat-etudiant/'+nom+'/'+prenom,contrat );
  }

  assignEtudiantToDepartement(idE: number, idD: number) {
    return this.httpclient.get(this.url + this.EtudiantControllerName + '/assign-etudiant-departement/' + idE + '/' + idD);
  }
  getUniversiteByName(name: string) {
    return this.httpclient.get<Universite>(this.url + '/universite/displayUniversiteByName/' + name);
  }
  assignUniversityToDepartement(idUniv: number, idDepartement: number) {
    return this.httpclient.get(this.url + '/universite/assignUnivDepJpql/' + idUniv + '/' + idDepartement);
  }
  assignUniversityTocour(idUniv: number, idCour: number) {
    return this.httpclient.get(this.url + '/universite/assignUnivCourJpql/' + idUniv + '/' + idCour);
  }
  getUniversitiesSortedWithAnyField(field: String) {
    return this.httpclient.get<Universite[]>(this.url + '/universite/getUniversitesWithSort' + field);
  }
  retrieve(id: number) {
    return this.httpclient.get<Universite[]>(this.url + '/departement/get-departements-universite/' + id);
  }
}
