export class Contrat {
  idContrat: number;
  dateDebutContrat: Date;
  dateFinContrat: Date;
  specialite: Spec;
  archive: boolean;
  montantContrat: number;
  etudiant: number
}

export enum Spec {
  IA = "IA",
  RESEAUX = "RESEAUX",
  CLOUD = "CLOUD",
  SECURITE = "SECURITE"
}