import { SubmitHandler, useForm } from "react-hook-form"
import { FormInput } from "./models"

export const CreateGame = () => {
    const {register, handleSubmit, formState: { errors, isValid }} = useForm<FormInput>()
    const onSubmit: SubmitHandler<FormInput> = data => console.info(data)

    let titleStyle = {
        backgroundColor: 'white',
        color: 'blue',
        borderColor: errors.title ? 'red': 'inherit'
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('title', { required: true })} style = { titleStyle }></input>
                { errors.title && <span style={{color: 'red'}}>*</span>}
                <select {...register('videoGameId')}>
                    <option value='7'>Final fantasy 7</option>
                    <option value='8'>Final fantasy 8</option>
                    <option value='9'>Final fantasy 9</option>
                    <option value='10'>Final fantasy 10</option>
                    <option value='16'>Final fantasy 16</option>
                </select>
                <button disabled={! isValid}>Sauvegarder</button>
            </form>
        </>
    )
}