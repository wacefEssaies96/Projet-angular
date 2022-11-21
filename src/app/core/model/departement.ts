import { ListDepartementsComponent } from "src/app/departements/list-departements/list-departements.component";
import { Etudiant } from "./etudiants";
import { User } from "./user";

  export class Departement{
    idDepartement: number;
    nomDepart: string;
    Etudiants:Array<Etudiant>;

}
