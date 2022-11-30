export class Etudiant {
    idEtudiant: number;
    prenomE: String;
    nomE: String;
    dateDebut: Date;
    op: option;
}

export enum option {
    TWIN = "TWIN",
    BI = "BI",
    SLEAM = "SLEAM"
}
