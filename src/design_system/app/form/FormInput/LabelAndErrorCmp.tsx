import { renderClassNamesConditionally } from "../../../../utils/conditionallyRenderingOfClassName"
import Input from "../../../components/ui/Input"
import { IFormConfig } from "../types"




export const LabelAndErrorCmp = ({ ...formProps }: IFormConfig) => {
  const { errors, name, register, type, className } = formProps
    return (
       <div className="flex flex-col items-start gap-2">
            <label htmlFor={name} className={renderClassNamesConditionally(className, 'capitalize font-medium text-[24px] text-[#9A9A9B] ')}>{name}</label>
            <Input type={type} name="fullname" register={ register } />
            { errors[ name ] && <span>{ errors[name].message}</span>}
        </div>
  )
}

