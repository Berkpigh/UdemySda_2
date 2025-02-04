/**
 * Contract to proved CRUD functions of T (generic type)
 */
export type GetAll<T> = () => Promise<T>

export type PostOne<U, T> = (item: U) => Promise<T>
