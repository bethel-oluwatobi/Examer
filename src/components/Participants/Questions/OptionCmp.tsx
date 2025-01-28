
interface IProps {
  index: number,
  optionAnswer: string
  optionLetter: string
  correctOption:string
  selcetedOption: number | null
  setSelectedOption:(value:number)=>void
}

// store this inside the localstorage the indexes of the 

export const OptionsCmp = ({index, optionAnswer, optionLetter, selcetedOption,setSelectedOption}:IProps) => {

  const optionsSelect = (index: number) => {
    console.log(index)
    setSelectedOption(index)
  }
  return (
    <div key={index} onClick={ () => optionsSelect(index) } className={` flex items-center gap-5  ${selcetedOption === index ?'bg-blue-400' : 'bg-white'}`}>
      <p>{optionLetter}</p>
      <p >{optionAnswer}</p>
    </div>
  )
}