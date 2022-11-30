export class Etudiant {
    idEtudiant: number;
    prenomE: String;
    nomE: String;
    dateNaissance: Date;
    op: Option;
}

export enum Option {
    TWIN = "TWIN",
    BI = "BI",
    SLEAM = "SLEAM"
}
