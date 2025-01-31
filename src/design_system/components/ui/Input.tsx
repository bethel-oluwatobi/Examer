import { UseFormRegister } from "react-hook-form"
import { renderClassNamesConditionally } from "../../../utils/conditionallyRenderingOfClassName"


type InputType = 'text' | 'email' | 'radio'


interface IProps {
    className?: string,
    type: InputType,
    name: string,
    register:UseFormRegister<any>
}



const Input = ({ ...inputProps }: IProps) => {
    const {className, register, name, type} =  inputProps
    // const stringToArray = '1px border'
  // console.log(stringToArray.search('bor'))
  return (
    <input
      type={type}
      className={ renderClassNamesConditionally(className, 'border w-[323px]  h-[45px] p-3 outline-none rounded-[16px] bg-[#D9D9D9]') }
      { ...register(name) }
    />
  )
}

export default Input
