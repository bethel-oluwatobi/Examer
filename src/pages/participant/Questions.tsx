import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../design_system/components/ui/Button"
import { useEffect, useState } from "react"
import { ParticipantLayouts } from "../../layouts/participants/ParticipantLayouts"
import { Storage } from "../../lib/stoarge"
import { NAV_LINKS } from "../../shared/participants/constants"


const exams = [
  {
  questions: 'who Gave birth to Jesus',
  options: [ {
      optionLetter: 'A',
      optionsAnswer: 'hannah',
    },
      {
      optionLetter: 'B',
      optionsAnswer: 'mary',
      correct:true
    },{
      optionLetter: 'C',
      optionsAnswer: 'jacob',
    },{
      optionLetter: 'D',
      optionsAnswer: 'david',
    },
       ]
},
  {
  questions: 'who Gave birth to Jesus',
 options: [ {
      optionLetter: 'A',
      optionsAnswer: 'hannah',
    },
      {
      optionLetter: 'B',
      optionsAnswer: 'mary',
      correct:true
      
    },{
      optionLetter: 'C',
      optionsAnswer: 'jacob',
    },{
      optionLetter: 'D',
      optionsAnswer: 'david',
    },
       ]
  },
  {
  questions: 'who is joseph Father',
    options: [ {
      optionLetter: 'A',
      optionsAnswer: 'hannah',
    },
      {
      optionLetter: 'B',
      optionsAnswer: 'mary',      
    },{
      optionLetter: 'C',
      optionsAnswer: 'jacob',
      correct:true      
    },{
      optionLetter: 'D',
      optionsAnswer: 'david',
    },
       ]
  }
]

// type TExams = typeof exams


interface IProps {
  index: number,
  optionAnswer: string
  optionLetter: string
  correctOption?: boolean
  selcetedOption: number | undefined
  setSelectedOption:(value:number)=>void
}

const OptionsCmp = ({index, optionAnswer, optionLetter, correctOption, selcetedOption,setSelectedOption}:IProps) => {

  
  const optionsSelect = (index: number) => {
    setSelectedOption(index)
  }
  return (
    <div key={index} onClick={ () => optionsSelect(index) } className={` flex items-center gap-5  ${selcetedOption === index ?'bg-blue-400' : 'bg-white'}`}>
      <p>{optionLetter}</p>
      <p >{optionAnswer}</p>
    </div>
  )
}

export const Questions = () => {
  const param = useParams()
  if (!param.id)
    {
      return
    }
  const id = parseInt(param.id)
  const [ questionCount, setQuestionCount ] = useState(id)
  const [selcetedOption, setSelectedOption] = useState<number>()
  // const pathname = useResolvedPath()
  const navigate =  useNavigate()
  const QUESTION_STORAGE_KEY = 'QUESTION_KEY' as const
  
  const nextQuestion = () => {
    if (selcetedOption === undefined) return
    
    const optionChoosen = [ exams[ selcetedOption ] ]
    Storage.save(QUESTION_STORAGE_KEY, JSON.stringify([ ...optionChoosen ]))   
    console.log(exams.length, questionCount)
    if (exams.length < questionCount + 1) navigate(NAV_LINKS.result)
    
    setQuestionCount((prev) => prev + 1)
    setSelectedOption(undefined)
    }

  // console.log(pathname)



  useEffect(() => {
  }, [nextQuestion])

  if(!exams[questionCount -1]) return
  return (
    <ParticipantLayouts>
        <h1>{ exams[questionCount-1].questions}</h1>
      { exams[ questionCount - 1 ].options.map((option, index) => (
        <OptionsCmp
          index={ index }
          optionLetter={ option.optionLetter }
          selcetedOption={ selcetedOption }
          setSelectedOption={ setSelectedOption }
          optionAnswer={ option.optionsAnswer }
          correctOption={ option.correct } key={ index }
        />
        )) }
        <Button onClick={nextQuestion} >Next</Button>
    </ParticipantLayouts>

  )
}

