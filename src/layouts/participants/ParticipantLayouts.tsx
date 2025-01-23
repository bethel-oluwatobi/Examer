import { ReactNode } from "react"
import { IconsCmp } from "../../components/IconsCmp"


interface IProps {
  children:ReactNode
}

export const ParticipantLayouts = ({children}:IProps) => {
  
  return (
    <div className="max-w-7xl mx-auto px-3 py-5">
      <div className="flex flex-row items-center justify-between mb-2">
        <h3>Examer</h3>
         <IconsCmp  icon='menuIcon' />
      </div>
      {children}
    </div>
  )
}

