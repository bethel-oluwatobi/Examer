import { renderClassNamesConditionally } from "../../../utils/conditionallyRenderingOfClassName"



interface IProps{
    children: React.ReactNode
    className?: string
    onClick?: () => void
    isDisable?:boolean
}

export const Button = ({className, children, onClick, isDisable}:IProps) => {
    return (
        <button
            onClick={ onClick }
            className={ renderClassNamesConditionally(className, 'w-full mt-5 h-[52px] rounded-[16px] font-semibold text-[20px] text-[#FFFFFF] bg-[#28A745] disabled:bg-slate-400 disabled:text-slate-300') }
            disabled={isDisable}
        >
            { children }  
        </button>

    )
}

