import { FieldErrors, UseFormRegister } from "react-hook-form"

export type InputType = 'text' | 'email' | 'radio'


export interface IFormConfig  {
    className?: string,
    type: InputType,
    name: string,
    register: UseFormRegister<any>
    errors: FieldErrors<any>
}