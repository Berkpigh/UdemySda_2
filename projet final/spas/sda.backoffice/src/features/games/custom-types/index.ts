import { GetAll } from "../../../shared/models/custom.types"
import { Games } from "../models"

/**
 * Contract to provde function to get games
 */
export type GetAllGames = GetAll<Games>