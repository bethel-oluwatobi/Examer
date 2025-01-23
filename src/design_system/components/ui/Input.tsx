import { renderClassNamesConditionally } from "../../../utils/conditionallyRenderingOfClassName"


type InputType = 'text' | 'email' | 'radio'


interface IProps {
    className?: string,
    type: InputType,
    name: string,
    
}



const Input = ({ ...inputProps }: IProps) => {
    const {className} =  inputProps

  return (
    <input {...inputProps} className={renderClassNamesConditionally(className, 'border w-[323px]  h-[45px] p-3 outline-none rounded-[16px] bg-[#D9D9D9]')} />
  )
}

export default Input
