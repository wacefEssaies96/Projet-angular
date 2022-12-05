export class Etudiant {
    idEtudiant: number;
    prenomE: string;
    nomE: string;
    dateNaissance: Date;
    sexe: string;
    op: Option;
    email: string;
    password: string;
    nbrLike: number
}

export enum Option {
    TWIN = "TWIN",
    BI = "BI",
    SLEAM = "SLEAM"
}
