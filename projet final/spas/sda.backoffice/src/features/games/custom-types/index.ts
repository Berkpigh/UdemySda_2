import { CreateOne, GetAll } from "../../../shared/models/custom.types"
import { Games, Game } from "../models"

/**
 * Contract to provde function to get games
 */
export type GetAllGames = GetAll<Games>

/**
 * Contract to provde function to create game
 */
export type CreateOneGame = CreateOne<Game>
