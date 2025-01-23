import { systemIconSvg, TSystemIconsKeys } from "../shared/icons"

interface IProps {
    icon:TSystemIconsKeys
    height?:string,
    width?:string
}

export const IconsCmp = ({ icon, height = '20', width = '20'  }:IProps) => {
     const iconsPath = systemIconSvg(icon)
    return (
      <svg width={width} height={height} viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {iconsPath}
      </svg>
  )
}

