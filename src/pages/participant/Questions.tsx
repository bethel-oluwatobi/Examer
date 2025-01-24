import { useParams } from "react-router-dom"
import { Button } from "../../design_system/components/ui/Button"
import { useEffect, useState } from "react"
import { ParticipantLayouts } from "../../layouts/participants/ParticipantLayouts"


const exams = [
  {
  questions: 'who Gave birth to Jesus',
  answer: 'mary',
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
    },{
      optionLetter: 'D',
      optionsAnswer: 'david',
    },
       ]
},
  {
  questions: 'who Gave birth to Jesus',
  answer: 'mary',
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
    },{
      optionLetter: 'D',
      optionsAnswer: 'david',
    },
       ]
  },
  {
  questions: 'who is joseph Father',
  answer: 'jacob',
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
    },{
      optionLetter: 'D',
      optionsAnswer: 'david',
    },
       ]
  }
]

type TExams = typeof exams


interface IProps {
  index: number,
  optionAnswer: string
  optionLetter: string
  
}

const OptionsCmp = ({index, optionAnswer, optionLetter}:IProps) => {

  const [selcetedOption, setSelectedOption] = useState<number>()
  
  const optionsSelect = (option: string, index: number) => {
    setSelectedOption(index)
  }
  return (
    <div className={` flex items-center gap-5  ${selcetedOption === index ?'bg-blue-400' : 'bg-white'}`}>
      <p key={index } onClick={()=> optionsSelect(optionLetter,index)}>{optionLetter}</p>
      <p key={index } onClick={()=> optionsSelect(optionAnswer,index)}>{optionAnswer}</p>
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
  // const pathname = useResolvedPath()
  
  const nextQuestion = () => {
    setQuestionCount((prev)=> prev+1)
  }

  // console.log(pathname)



  useEffect(() => {
  }, [nextQuestion])

  return (
    <ParticipantLayouts>
        <h1>{ exams[questionCount].questions }</h1>
      { exams[ questionCount ].options.map((option, index) => (
        <OptionsCmp index={index} optionLetter={option.optionLetter} optionAnswer={option.optionsAnswer} key={index} />
        )) }
        <Button onClick={nextQuestion} >Next</Button>
    </ParticipantLayouts>

  )
}

