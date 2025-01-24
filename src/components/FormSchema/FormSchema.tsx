import { FieldErrors, UseFormRegister } from "react-hook-form"
import RenderFormField from "./RenderFormField"
import { Button } from "../../design_system/components/ui/Button"


interface IFormSchemaConfig {
    fields: any[]
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

