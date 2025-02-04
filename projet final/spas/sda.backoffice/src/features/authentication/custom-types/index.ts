import { PostOne } from "../../../shared/models/custom.types"
import { AuthenticationUser, LoginUser } from "../models"

/**
 * Contract to provde function to post login info
 */
export type PostOneUser = PostOne<LoginUser, AuthenticationUser>