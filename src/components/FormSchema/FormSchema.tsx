import { FieldErrors, UseFormRegister } from "react-hook-form"
import RenderFormField from "./RenderFormField"
import { Button } from "../../design_system/components/ui/Button"
import { InputType } from "../../design_system/app/form/types"



export type Fields = {name:string, type:InputType}

interface IFormSchemaConfig {
    fields: [Fields]
    submit: () => void
    error: FieldErrors<any>
    register:UseFormRegister<any>
}

export const FormSchema = ({ ...formProps }: IFormSchemaConfig) => {
    const { fields, submit, error, register } = formProps
  return (
      <form onSubmit={submit}>
          { fields.map((field, index) => (
              <RenderFormField key={index} errors={error} name={field.name} register={register} type={field.type} />
          )) }
          <Button>Start Quiz</Button>
       </form>
  )
}

