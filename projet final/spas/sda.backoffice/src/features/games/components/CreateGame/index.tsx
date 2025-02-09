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
                <button disabled={! isValid}>Sauvegarder</button>
            </form>
        </>
    )
}