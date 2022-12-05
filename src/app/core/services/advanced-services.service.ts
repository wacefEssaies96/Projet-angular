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
    return this.httpclient.get<Universite>(this.url + this.UniversiteControllerName +'/displayUniversiteByName/' + name);
  }
  assignUniversityToDepartement(idUniv: number, idDepartement: number) {
    return this.httpclient.get(this.url + this.UniversiteControllerName +'/assignUnivDepJpql/' + idUniv + '/' + idDepartement);
  }
  assignUniversityTocour(idUniv: number, idCour: number) {
    return this.httpclient.get(this.url + this.UniversiteControllerName +'/assignUnivCourJpql/' + idUniv + '/' + idCour);
  }
  getUniversitiesSortedWithAnyField(field: String) {
    return this.httpclient.get<Universite[]>(this.url + this.UniversiteControllerName +'/getUniversitesWithSort' + field);
  }
  retrieve(id: number) {
    return this.httpclient.get<Universite[]>(this.url + this.DepartementControllerName +'/get-departements-universite/' + id);
  }
  incrementLikes(controller: string,object: any){
    return this.httpclient.put(this.url + controller + '/incrementLikes', object)
  }
  getNbrEtudiantBySexe(){
    return this.httpclient.get<any>(this.url + '/etudiant/count-nbr-sexe');
  }
  getNbrUniversiteByTypeuniv(){
    return this.httpclient.get<any>(this.url + '/universite/count-nbr-typeuniv');
  }
  getNbrContratBySpecialite(){
    return this.httpclient.get<any>(this.url + '/contrat/count-nbr-specialite');
  }
  getNbrEquipeByNiveau(){
    return this.httpclient.get<any>(this.url + '/equipe/count-nbr-niveau');
  }
  getNbrStageByType(){
    return this.httpclient.get<any>(this.url + '/stage/count-nbr-type');
  }
  
  assignProjetToEquipe(idprojet: number, idequipe: number){
    return this.httpclient.get(this.url + this.ProjetControllerName+'/assignProToEquipe/' + idprojet +'/' + idequipe );
  }

}
