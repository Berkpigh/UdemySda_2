/**
 * Character chosen by a player
 */
export interface Character {
    surname: string
}

/**
 * Partie de jeu
 */
export interface Game {
    id: number;
    titre: string;
    videoGameId: number;
    persoChoisi?: Character;
    success: boolean;
};

export type Games = Game[];