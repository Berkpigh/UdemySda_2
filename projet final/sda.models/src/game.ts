export type EtatPartie = 'a démarrer' | 'en cours' | 'avec succès' | 'perdu';

export interface Game {
    titre: string;
    dateDebut: Date;
    dateFin?: Date;
    etat: EtatPartie
}

export type Games = Game[];