import { SubmitHandler, useForm } from "react-hook-form"
import { FormInput } from "./models"

export const CreateGame = () => {
    const {register, handleSubmit} = useForm<FormInput>()
    const onSubmit: SubmitHandler<FormInput> = data => console.info(data)

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('title')}></input>
                <button>Sauvegarder</button>
            </form>
        </>
    )

}