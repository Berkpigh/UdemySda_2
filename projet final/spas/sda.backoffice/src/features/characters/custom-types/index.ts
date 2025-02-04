import { GetAll } from "../../../shared/models/custom.types"
import { Characters } from "../models"

/**
 * Contract to provde function to get characters
 */
export type GetAllCharacters = GetAll<Characters>