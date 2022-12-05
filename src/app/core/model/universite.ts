export class Universite {
    idUniv: number;
    nomUniv: string;
    descriptionUniv: String;
    dateCreationUniv: Date;
    typeuniv: TypeUniv;
    imgUniv: String;
    nbrLike: number
}

enum TypeUniv {
    PRIVATE,
    PUBLIC,
    SEMIPUBLIC
} 