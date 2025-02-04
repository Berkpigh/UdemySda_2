import { useState, useEffect } from "react"
import { Characters } from "../../models"
import business from "../../services/characters.application"

/**
 * Head component to display list of characters
 */
export const ListCharacters = () => {
    const [characters, setCharacters] = useState<Characters>([])
    // const characterDivList = characters.map(character => <div key={character.id}>{character.name}</div>)
    const characterDivList = characters.map(character => <div key={character.id}>{character.name}</div>)
    // let id: number | undefined = undefined

    useEffect(() => {
        business.getAll().then(result => {
            setCharacters(result)
        })

        return () => {
            // fonction de cleanup

        }
    }, []) // Appel qu'une seule fois après le rendu initial

    // useEffect(() => {
    //     id = setInterval(() => {
    //         console.info('hello !')
    //     }, 1000)

    //     return () => {
    //         clearInterval(id)
    //     }
    // })

    return (
        <>
        <div>
            {characterDivList}
        </div>
        </>
    )
}