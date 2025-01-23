import { renderClassNamesConditionally } from "../../../utils/conditionallyRenderingOfClassName"



interface IProps{
    children: React.ReactNode
    className?:string
}

export const Button = ({className, children}:IProps) => {
    return (
        <button className={renderClassNamesConditionally(className, 'w-full mt-5 h-[52px] rounded-[16px] font-semibold text-[20px] text-[#FFFFFF]   bg-[#28A745]')}>
            { children }
            
        </button>

    )
}

