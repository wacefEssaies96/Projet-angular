export class Stage {
  idStage: number;
  dateDebutStage: Date;
  dateFinStage: Date;
  typeStage: TStage;
  resumeStage: string;
  nbrLike: number
}

export enum TStage {
  StageEte = "StageEte",
  StageImmersion = "StageImmersion",
  PFE = "PFE"
}

