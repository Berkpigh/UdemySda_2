import { Player } from './player';
import { EtatPartie, Game } from './game';

const player: Player = {
    dateNaissance: new Date(),
    prenom: 'Evan',
    role: {
        label: 'magicien',
        power: 100
    }
}

player.games = [];

const game: Game = {
    dateDebut: new Date(),
    etat: 'a démarrer',
    titre: 'Tomb raider'
}
player.games.push(game);