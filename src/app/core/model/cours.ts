export class Cours {
    idCour: number;
    codeCour: number;
    intituleCour: String;
    typeCour: TypeCours;
}

enum TypeCours {
    COURSDUJOUR,
	COURSDUSOIR,
	ALTERNANCE
} 